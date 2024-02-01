import path from 'path'
import fs from 'fs'

import * as ts from 'typescript'

import { GlobalCache, ProjectOptions } from './CommandLineOptions'
import { Counter } from './Counter'
import {
  metaDescriptor,
  methodDescriptor,
  packageDescriptor,
  parameterDescriptor,
  termDescriptor,
  typeDescriptor,
  typeParameterDescriptor,
} from './Descriptor'
import { Input } from './Input'
import { Packages } from './Packages'
import { formatByteSizeAsHumanReadable } from './parseHumanByteSizeIntoNumber'
import { Range } from './Range'
import * as scip from './scip'
import { ScipSymbol } from './ScipSymbol'
import * as ts_inline from './TypeScriptInternal'

export class FileIndexer {
  private localCounter = new Counter()
  private propertyCounters: Map<string, Counter> = new Map()
  private localSymbolTable: Map<ts.Node, ScipSymbol> = new Map()
  private workingDirectoryRegExp: RegExp
  constructor(
    public readonly checker: ts.TypeChecker,
    public readonly options: ProjectOptions,
    public readonly input: Input,
    public readonly document: scip.scip.Document,
    public readonly globalSymbolTable: Map<ts.Node, ScipSymbol>,
    private readonly cache: GlobalCache,
    public readonly globalConstructorTable: Map<ts.ClassDeclaration, boolean>,
    public readonly packages: Packages,
    public readonly sourceFile: ts.SourceFile
  ) {
    this.workingDirectoryRegExp = new RegExp(options.cwd, 'g')
  }
  public index(): void {
    // Uncomment below if you want to skip certain files for local development.
    if (
      process.env.SCIP_ONLY &&
      !this.sourceFile.fileName.includes(process.env.SCIP_ONLY)
    ) {
      return
    }

    const byteSize = Buffer.from(this.sourceFile.getText()).length
    if (
      this.options.maxFileByteSizeNumber &&
      byteSize > this.options.maxFileByteSizeNumber
    ) {
      const humanSize = formatByteSizeAsHumanReadable(byteSize)
      const humanMaxSize = formatByteSizeAsHumanReadable(
        this.options.maxFileByteSizeNumber
      )
      console.log(
        `info: skipping file '${this.sourceFile.fileName}' because it has byte size ${humanSize} that exceeds the maximum threshold ${humanMaxSize}. ` +
          'If you intended to index this file, use the flag --max-file-byte-size to configure the maximum file size threshold.'
      )
      return
    }

    this.emitSourceFileOccurrence()
    this.visit(this.sourceFile)
  }
  private emitSourceFileOccurrence(): void {
    const symbol = this.scipSymbol(this.sourceFile)
    if (symbol.isEmpty()) {
      return
    }
    this.pushOccurrence(
      new scip.scip.Occurrence({
        range: [0, 0, 0],
        enclosing_range: Range.fromNode(this.sourceFile).toLsif(),
        symbol: symbol.value,
        symbol_roles: scip.scip.SymbolRole.Definition,
      })
    )
    const moduleName =
      this.sourceFile.moduleName || path.basename(this.sourceFile.fileName)
    this.document.symbols.push(
      new scip.scip.SymbolInformation({
        symbol: symbol.value,
        documentation: ['```ts\nmodule "' + moduleName + '"\n```'],
      })
    )
  }
  private visit(node: ts.Node): void {
    if (
      ts.isConstructorDeclaration(node) ||
      ts.isIdentifier(node) ||
      ts.isPrivateIdentifier(node) ||
      ts.isStringLiteralLike(node)
    ) {
      const sym = this.getTSSymbolAtLocation(node)
      if (sym) {
        this.visitSymbolOccurrence(node, sym)
      }
    }

    ts.forEachChild(node, node => this.visit(node))
  }

  // Get the ts.Symbol corresponding to the current node, potentially de-aliasing
  // the direct symbol to account for imports.
  //
  // This code is directly based off src/services/goToDefinition.ts.
  private getTSSymbolAtLocation(node: ts.Node): ts.Symbol | undefined {
    const rangeNode: ts.Node = ts.isConstructorDeclaration(node)
      ? node.getFirstToken() ?? node
      : node
    const symbol = this.checker.getSymbolAtLocation(rangeNode)

    // If this is an alias, and the request came at the declaration location
    // get the aliased symbol instead. This allows for goto def on an import e.g.
    //   import {A, B} from "mod";
    // to jump to the implementation directly.
    if (
      symbol?.declarations &&
      symbol.flags & ts.SymbolFlags.Alias &&
      node.kind === ts.SyntaxKind.Identifier &&
      (node.parent === symbol.declarations[0] ||
        ts_inline.shouldSkipAlias(symbol.declarations[0]))
    ) {
      const aliased = this.checker.getAliasedSymbol(symbol)
      if (aliased.declarations) {
        return aliased
      }
    }
    return symbol
  }

  private hasConstructor(classDeclaration: ts.ClassDeclaration): boolean {
    const cached = this.globalConstructorTable.get(classDeclaration)
    if (cached !== undefined) {
      return cached
    }

    for (const member of classDeclaration.members) {
      if (ts.isConstructorDeclaration(member)) {
        this.globalConstructorTable.set(classDeclaration, true)
        return true
      }
    }

    this.globalConstructorTable.set(classDeclaration, false)
    return false
  }

  private visitSymbolOccurrence(node: ts.Node, sym: ts.Symbol): void {
    const range = Range.fromNode(node).toLsif()
    let role = 0
    const isDefinitionNode = isDefinition(node)
    if (isDefinitionNode) {
      role |= scip.scip.SymbolRole.Definition
    }
    const declarations = ts.isConstructorDeclaration(node)
      ? [node]
      : isDefinitionNode
        ? // Don't emit ambiguous definition at definition-site. You can reproduce
          // ambiguous results by triggering "Go to definition" in VS Code on `Conflict`
          // in the example below:
          // export const Conflict = 42
          // export interface Conflict {}
          //                  ^^^^^^^^ "Go to definition" shows two results: const and interface.
          // See https://github.com/sourcegraph/scip-typescript/pull/206 for more details.
          [node.parent]
        : sym?.declarations || []
    for (const declaration of declarations) {
      let scipSymbol = this.scipSymbol(declaration)

      let enclosingRange: number[] | undefined

      if (!isDefinitionNode || scipSymbol.isEmpty() || scipSymbol.isLocal()) {
        // Skip enclosing ranges for these cases
      } else if (
        ts.isVariableDeclaration(declaration) &&
        declaration.initializer &&
        ts.isFunctionLike(declaration.initializer)
      ) {
        enclosingRange = Range.fromNode(declaration.initializer).toLsif()
      } else if (
        ts.isFunctionDeclaration(declaration) ||
        ts.isEnumDeclaration(declaration) ||
        ts.isTypeAliasDeclaration(declaration) ||
        ts.isClassDeclaration(declaration) ||
        ts.isMethodDeclaration(declaration) ||
        ts.isInterfaceDeclaration(declaration)
      ) {
        enclosingRange = Range.fromNode(declaration).toLsif()
      }

      if (
        ((ts.isIdentifier(node) && ts.isNewExpression(node.parent)) ||
          (ts.isPropertyAccessExpression(node.parent) &&
            ts.isNewExpression(node.parent.parent))) &&
        ts.isClassDeclaration(declaration) &&
        this.hasConstructor(declaration)
      ) {
        scipSymbol = ScipSymbol.global(
          scipSymbol,
          methodDescriptor('<constructor>')
        )
      }

      if (scipSymbol.isEmpty()) {
        // Skip empty symbols
        continue
      }
      this.pushOccurrence(
        new scip.scip.Occurrence({
          enclosing_range: enclosingRange,
          range,
          symbol: scipSymbol.value,
          symbol_roles: role,
        })
      )
      if (isDefinitionNode) {
        this.addSymbolInformation(node, sym, declaration, scipSymbol)
        this.handleShorthandPropertyDefinition(declaration, range)
        this.handleObjectBindingPattern(node, range)
        // Only emit one symbol for definitions sites, see https://github.com/sourcegraph/lsif-typescript/issues/45
        break
      }
    }
  }

  /**
   * Emits an additional definition occurrence when destructuring an object
   * pattern. For example:
   * ```
   * interface Props { property: number}
   * const props: Props[] = [{ property: 42 }]
   * props.map(({property}) => property) = {a}
   * //          ^^^^^^^^ references `Props.property` and defines a local parameter `property`
   * ```
   */
  private handleObjectBindingPattern(node: ts.Node, range: number[]): void {
    const isObjectBindingPatternProperty =
      ts.isIdentifier(node) &&
      ts.isBindingElement(node.parent) &&
      ts.isObjectBindingPattern(node.parent.parent)
    if (!isObjectBindingPatternProperty) {
      return
    }
    const tpe = this.checker.getTypeAtLocation(node.parent.parent)
    const property = tpe.getProperty(this.safeGetText(node))
    for (const declaration of property?.declarations || []) {
      const scipSymbol = this.scipSymbol(declaration)
      if (scipSymbol.isEmpty()) {
        continue
      }
      this.pushOccurrence(
        new scip.scip.Occurrence({
          range,
          symbol: scipSymbol.value,
        })
      )
    }
  }

  /**
   * Handles the special-case around shorthand property syntax so that we emit two occurrences instead of only one.
   * Shorthand properties need two symbols because they both define a symbol and reference a symbol. For example:
   * ```
   * const a = 42
   * const b = {a}
   * //         ^ both references the local const `a` and defines a new property
   * const c = b.a
   * //          ^ reference to the property `a`, not the local const
   * ```
   */
  private handleShorthandPropertyDefinition(
    declaration: ts.Node,
    range: number[]
  ): void {
    if (declaration.kind !== ts.SyntaxKind.ShorthandPropertyAssignment) {
      return
    }
    const valueSymbol =
      this.checker.getShorthandAssignmentValueSymbol(declaration)
    if (!valueSymbol) {
      return
    }
    for (const symbol of valueSymbol?.declarations || []) {
      const scipSymbol = this.scipSymbol(symbol)
      if (scipSymbol.isEmpty()) {
        continue
      }
      this.pushOccurrence(
        new scip.scip.Occurrence({
          range,
          symbol: scipSymbol.value,
        })
      )
    }
  }

  private hideWorkingDirectory(value: string): string {
    return value.replace(this.workingDirectoryRegExp, '')
  }
  private addSymbolInformation(
    node: ts.Node,
    sym: ts.Symbol,
    declaration: ts.Node,
    symbol: ScipSymbol
  ): void {
    this.document.symbols.push(
      this.symbolInformation(node, sym, declaration, symbol)
    )
  }

  private symbolInformation(
    node: ts.Node,
    sym: ts.Symbol,
    declaration: ts.Node,
    symbol: ScipSymbol
  ): scip.scip.SymbolInformation {
    const documentation = [
      '```ts\n' +
        this.hideWorkingDirectory(this.signatureForDocumentation(node, sym)) +
        '\n```',
    ]
    const docstring = sym.getDocumentationComment(this.checker)
    if (docstring.length > 0) {
      documentation.push(ts.displayPartsToString(docstring))
    }

    if (
      symbol.value ===
      'scip-typescript npm @types/vscode 1.86.0 `index.d.ts`/vscode/ViewColumn#Active.'
    ) {
      console.log({
        kind: ts.SyntaxKind[node.kind],
        kind2: ts.SyntaxKind[declaration.kind],
      })
    }
    return new scip.scip.SymbolInformation({
      symbol: symbol.value,
      display_name: this.displayName(declaration),
      kind: this.symbolKind(declaration),
      documentation,
      relationships: this.relationships(declaration, symbol),
      signature: this.signature(declaration),
    })
  }

  private displayName(declaration: ts.Node): string | undefined {
    const downcast = declaration as any
    if (downcast?.name?.kind === ts.SyntaxKind.StringLiteral) {
      return downcast?.name?.text ?? ''
    }
    if (typeof downcast?.name?.getText === 'function') {
      return downcast.name.getText()
    }
    if (typeof downcast?.typeName?.getText === 'function') {
      return downcast.typeName.getText()
    }
    return undefined
  }

  private symbolKind(
    declaration: ts.Node
  ): scip.scip.SymbolInformation.Kind | undefined {
    switch (declaration.kind) {
      case ts.SyntaxKind.EnumDeclaration:
        return scip.scip.SymbolInformation.Kind.Enum
      case ts.SyntaxKind.EnumMember:
        return scip.scip.SymbolInformation.Kind.EnumMember
      case ts.SyntaxKind.Constructor:
        return scip.scip.SymbolInformation.Kind.Constructor
      case ts.SyntaxKind.VariableDeclaration:
        return scip.scip.SymbolInformation.Kind.Variable
      case ts.SyntaxKind.PropertyDeclaration:
      case ts.SyntaxKind.PropertySignature:
        return scip.scip.SymbolInformation.Kind.Property
      case ts.SyntaxKind.InterfaceDeclaration:
        return scip.scip.SymbolInformation.Kind.Interface
      case ts.SyntaxKind.ClassDeclaration:
        return scip.scip.SymbolInformation.Kind.Class
      case ts.SyntaxKind.FunctionDeclaration:
      case ts.SyntaxKind.FunctionType:
        return scip.scip.SymbolInformation.Kind.Function
      case ts.SyntaxKind.MethodDeclaration:
      case ts.SyntaxKind.GetAccessor:
      case ts.SyntaxKind.SetAccessor:
        return scip.scip.SymbolInformation.Kind.Method
      case ts.SyntaxKind.TypeAliasDeclaration:
        return scip.scip.SymbolInformation.Kind.TypeAlias
      case ts.SyntaxKind.Parameter:
        return scip.scip.SymbolInformation.Kind.Parameter
      case ts.SyntaxKind.TypeParameter:
        return scip.scip.SymbolInformation.Kind.TypeParameter
      default:
        // console.log({
        //   kind: ts.SyntaxKind[declaration.kind],
        //   text: declaration.getText(),
        // })
        return undefined
    }
  }

  private undefinedSymbol = this.keywordSymbol('undefined')
  private undefinedType = new scip.scip.Type({
    type_ref: this.builtinKeywordType('undefined'),
  })
  private isOptional(type: scip.scip.Type): boolean {
    if (type.has_union_type) {
      return type.union_type.types.some(
        tpe => tpe.has_type_ref && tpe.type_ref.symbol === this.undefinedSymbol
      )
    }
    if (type.has_type_ref) {
      return type.type_ref.symbol === this.undefinedSymbol
    }
    return false
  }

  private makeOptional(type: scip.scip.Type): scip.scip.Type {
    if (this.isOptional(type)) {
      return type
    }
    const union_types = type.has_union_type ? type.union_type.types : [type]

    return new scip.scip.Type({
      union_type: new scip.scip.UnionType({
        types: [...union_types, this.undefinedType],
      }),
    })
  }

  private signature(declaration: ts.Node): scip.scip.Signature | undefined {
    if (!this.options.emitSignatures) {
      return undefined
    }

    const signature = new scip.scip.Signature({})

    if (
      ts.isParameter(declaration) ||
      ts.isPropertyDeclaration(declaration) ||
      ts.isPropertySignature(declaration) ||
      ts.isVariableDeclaration(declaration)
    ) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: declaration.type
          ? this.type(declaration.type)
          : (ts.isPropertyDeclaration(declaration) ||
                ts.isVariableDeclaration(declaration)) &&
              declaration.initializer
            ? this.expressionType(declaration.initializer)
            : undefined,
      })
      const isOptional = !!(
        (ts.isParameter(declaration) && declaration.questionToken) ||
        (ts.isPropertyDeclaration(declaration) && declaration.questionToken) ||
        (ts.isPropertySignature(declaration) && declaration.questionToken)
      )
      if (isOptional && signature.value_signature.tpe !== undefined) {
        signature.value_signature.tpe = this.makeOptional(
          signature.value_signature.tpe
        )
      }
    } else if (ts.isPropertyAssignment(declaration)) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: this.expressionType(declaration.initializer),
      })
    } else if (ts.isShorthandPropertyAssignment(declaration)) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: this.expressionType(declaration.name),
      })
    } else if (ts.isBindingName(declaration)) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: this.expressionType(declaration),
      })
    } else if (ts.isPropertyAssignment(declaration)) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: this.expressionType(declaration.initializer),
      })
    } else if (
      ts.isSetAccessorDeclaration(declaration) ||
      ts.isGetAccessorDeclaration(declaration) ||
      ts.isConstructorDeclaration(declaration) ||
      ts.isFunctionDeclaration(declaration) ||
      ts.isMethodDeclaration(declaration)
    ) {
      signature.method_signature = new scip.scip.MethodSignature({
        return_type: declaration.type ? this.type(declaration.type) : undefined,
        type_parameters: this.symlinks(declaration.typeParameters),
        parameter_lists: [this.symlinks(declaration.parameters)],
      })
    } else if (ts.isTypeAliasDeclaration(declaration)) {
      signature.type_signature = new scip.scip.TypeSignature({
        type_parameters: this.symlinks(declaration.typeParameters),
        lower_bound: this.type(declaration.type),
      })
    } else if (
      ts.isClassLike(declaration) ||
      ts.isInterfaceDeclaration(declaration)
    ) {
      const members: ts.Node[] = []
      for (const member of declaration.members) {
        if (ts.isIndexSignatureDeclaration(member)) {
          for (const parameter of member.parameters) {
            members.push(parameter)
          }
        } else members.push(member)
      }
      signature.class_signature = new scip.scip.ClassSignature({
        declarations: this.symlinks(ts.factory.createNodeArray(members)),
        type_parameters: this.symlinks(declaration.typeParameters),
        parents: declaration.heritageClauses?.flatMap(heritageClause =>
          heritageClause.types.map(tpe => this.type(tpe))
        ),
      })
    } else if (ts.isEnumDeclaration(declaration)) {
      signature.class_signature = new scip.scip.ClassSignature({
        declarations: this.symlinks(declaration.members),
      })
    } else if (ts.isEnumMember(declaration)) {
      signature.value_signature = new scip.scip.ValueSignature({
        tpe: declaration.initializer
          ? this.expressionType(declaration.initializer)
          : new scip.scip.Type({ type_ref: this.builtinKeywordType('number') }),
      })
    } else if (ts.isTypeParameterDeclaration(declaration)) {
      // intentionally ignore
    } else {
      // console.log({
      //   kind: ts.SyntaxKind[declaration.kind],
      //   text: declaration.getText(),
      // })
    }

    return signature
  }

  private symlinks(nodes?: ts.NodeArray<ts.Node>): scip.scip.Scope {
    if (nodes === undefined) {
      return new scip.scip.Scope()
    }
    return new scip.scip.Scope({
      symlinks: nodes.map(node => this.scipSymbol(node).value),
    })
  }

  private expressionType(node: ts.Node): scip.scip.Type {
    if (
      ts.isPrefixUnaryExpression(node) &&
      node.operator === ts.SyntaxKind.MinusToken &&
      ts.isNumericLiteral(node.operand)
    ) {
      // TODO: support arbitrary expressions. This solution is a hack that
      // doesn't scale well.
      const tpe = this.expressionType(node.operand)
      if (tpe.constant_type.constant.has_int_constant) {
        tpe.constant_type.constant.int_constant.value =
          -tpe.constant_type.constant.int_constant.value
      } else if (tpe.constant_type.constant.has_double_constant) {
        tpe.constant_type.constant.double_constant.value =
          -tpe.constant_type.constant.double_constant.value
      }
      return tpe
    }
    if (ts.isNumericLiteral(node)) {
      const constant = new scip.scip.Constant()
      const isFloat = node.text.includes('.')
      try {
        if (isFloat) {
          constant.double_constant = new scip.scip.DoubleConstant({
            value: Number.parseFloat(node.text),
          })
        } else {
          constant.int_constant = new scip.scip.IntConstant({
            value: Number.parseInt(node.text, 10),
          })
        }
      } catch {
        console.log(`unsupported numeric literal: ${node.text}`)
      }
      return new scip.scip.Type({
        constant_type: new scip.scip.ConstantType({ constant }),
      })
    }
    if (ts.isStringLiteral(node)) {
      return new scip.scip.Type({
        constant_type: new scip.scip.ConstantType({
          constant: new scip.scip.Constant({
            string_constant: new scip.scip.StringConstant({ value: node.text }),
          }),
        }),
      })
    }
    const type = this.checker.typeToTypeNode(
      this.checker.getTypeAtLocation(node),
      node.parent,
      undefined
    )
    return type ? this.type(type) : new scip.scip.Type({})
  }

  private type(node: ts.Node): scip.scip.Type {
    const type = new scip.scip.Type({})
    if (ts.isTypeLiteralNode(node)) {
      type.structural_type = new scip.scip.StructuralType({
        declarations: this.symlinks(node.members),
      })
    } else if (ts.isParenthesizedTypeNode(node)) {
      return this.type(node.type)
    } else if (ts.isUnionTypeNode(node)) {
      type.union_type = new scip.scip.UnionType({
        types: node.types.map(type => this.type(type)),
      })
    } else if (ts.isIntersectionTypeNode(node)) {
      type.intersection_type = new scip.scip.IntersectionType({
        types: node.types.map(type => this.type(type)),
      })
    } else if (ts.isTupleTypeNode(node)) {
      type.type_ref = new scip.scip.TypeRef({
        symbol: this.builtinKeywordType('tuple').symbol,
        type_arguments: node.elements.map(element => this.type(element)),
      })
    } else if (ts.isTypeReferenceNode(node)) {
      const declaration = this.expressionDeclaration(node.typeName)
      type.type_ref = new scip.scip.TypeRef({
        symbol: declaration ? this.scipSymbol(declaration).value : undefined,
        type_arguments: node.typeArguments?.map(argument =>
          this.type(argument)
        ),
      })
    } else if (ts.isExpressionWithTypeArguments(node)) {
      let symbol: string | undefined
      // Try to emit normal type reference if the expression is a basic reference
      if (ts.isIdentifier(node.expression)) {
        const declaration = this.expressionDeclaration(node.expression)
        if (declaration) {
          symbol = this.scipSymbol(declaration).value
        }
      }
      const prefix = symbol ? undefined : this.type(node.expression)
      type.type_ref = new scip.scip.TypeRef({
        prefix,
        symbol,
        // intentionally no symbol
        type_arguments: node.typeArguments?.map(argument =>
          this.type(argument)
        ),
      })
    } else if (ts.isArrayTypeNode(node)) {
      type.type_ref = new scip.scip.TypeRef({
        symbol: this.builtinKeywordType('array').symbol,
        type_arguments: [this.type(node.elementType)],
      })
    } else if (ts.isFunctionTypeNode(node)) {
      type.lambda_type = new scip.scip.LambdaType({
        type_parameters: this.symlinks(node.typeParameters),
        parameters: this.symlinks(node.parameters),
        return_type: this.type(node.type),
      })
    } else if (ts.isStringLiteral(node)) {
      type.constant_type = new scip.scip.ConstantType({
        constant: new scip.scip.Constant({
          string_constant: new scip.scip.StringConstant({
            value: node.text,
          }),
        }),
      })
    } else if (ts.isTypeOperatorNode(node)) {
      return this.type(node.type)
    } else if (ts.isLiteralTypeNode(node)) {
      return this.type(node.literal)
    } else if (ts.isNumericLiteral(node)) {
      const intConstant = this.checker.getTypeAtLocation(node)
      if (intConstant.isNumberLiteral()) {
        type.constant_type = new scip.scip.ConstantType({
          constant: new scip.scip.Constant({
            int_constant: new scip.scip.IntConstant({
              value: intConstant.value,
            }),
          }),
        })
      }
    } else {
      const keywordType = this.syntaxKindToKeywordTypeRef(node.kind)
      if (keywordType) {
        type.type_ref = keywordType
      } else {
        switch (node.kind) {
          case ts.SyntaxKind.TypeQuery:
          case ts.SyntaxKind.PropertyAccessExpression:
          case ts.SyntaxKind.InferType:
          case ts.SyntaxKind.ConditionalType:
          case ts.SyntaxKind.MappedType:
          case ts.SyntaxKind.PrefixUnaryExpression:
          case ts.SyntaxKind.RestType:
          case ts.SyntaxKind.FirstTypeNode:
          case ts.SyntaxKind.TemplateLiteralType:
          case ts.SyntaxKind.LastTypeNode:
          case ts.SyntaxKind.ThisType:
          case ts.SyntaxKind.NamedTupleMember:
          case ts.SyntaxKind.ExportDeclaration:
          case ts.SyntaxKind.ConstructorType:
            // ignore
            break
          case ts.SyntaxKind.IndexedAccessType:
          case ts.SyntaxKind.Identifier:
            return this.expressionType(node)
          default:
            const tpe = this.checker.getTypeAtLocation(node)
            console.log({
              kind: ts.SyntaxKind[node.kind],
              // text: this.safeGetText(node),
              tpe: this.checker.typeToString(tpe),
            })
        }
      }
    }
    return type
  }

  private expressionDeclaration(node: ts.Node): ts.Declaration | undefined {
    const symbol = this.getTSSymbolAtLocation(node)
    if (!symbol) {
      return undefined
    }
    return symbol.declarations?.[0]
  }

  private declarations(tpe: ts.Type): ts.Declaration[] {
    return tpe?.symbol?.declarations ?? tpe.aliasSymbol?.declarations ?? []
  }

  private syntaxKindToKeywordTypeRef(
    kind: ts.SyntaxKind
  ): scip.scip.TypeRef | undefined {
    const keyword = ts.SyntaxKind[kind]
    if (keyword?.endsWith('Keyword')) {
      return this.builtinKeywordType(
        keyword.slice(0, keyword.length - 'Keyword'.length).toLowerCase()
      )
    }
    return undefined
  }

  private keywordSymbol(keyword: string): string {
    return ScipSymbol.builtinType(keyword).value
  }

  private builtinKeywordType(keyword: string): scip.scip.TypeRef {
    const symbol = this.keywordSymbol(keyword)
    if (
      this.options.emitExternalSymbols &&
      !this.cache.externalSymbols.has(symbol)
    ) {
      this.cache.externalSymbols.set(
        symbol,
        new scip.scip.SymbolInformation({
          display_name: keyword,
          symbol,
          kind: scip.scip.SymbolInformation.Kind.Type,
          signature: new scip.scip.Signature({}),
        })
      )
    }
    return new scip.scip.TypeRef({
      symbol,
    })
  }

  private pushOccurrence(occurrence: scip.scip.Occurrence): void {
    const lastOccurrence = this.document.occurrences.at(-1)
    if (lastOccurrence) {
      if (isEqualOccurrence(lastOccurrence, occurrence)) {
        return
      }
    }
    this.document.occurrences.push(occurrence)
  }

  private relationships(
    declaration: ts.Node,
    declarationSymbol: ScipSymbol
  ): scip.scip.Relationship[] {
    const relationships: scip.scip.Relationship[] = []
    const isAddedSymbol = new Set<string>()
    const pushImplementation = (
      node: ts.NamedDeclaration,
      isReferences: boolean
    ): void => {
      const symbol = this.scipSymbol(node)
      if (symbol.isEmpty()) {
        return
      }
      if (symbol.value === declarationSymbol.value) {
        return
      }
      if (isAddedSymbol.has(symbol.value)) {
        // Avoid duplicate relationships. This can happen for overloaded methods
        // that have different ts.Symbol but the same SCIP symbol.
        return
      }
      isAddedSymbol.add(symbol.value)
      relationships.push(
        new scip.scip.Relationship({
          symbol: symbol.value,
          is_implementation: true,
          is_reference: isReferences,
        })
      )
    }
    if (ts.isClassDeclaration(declaration)) {
      this.forEachAncestor(declaration, ancestor => {
        pushImplementation(ancestor, false)
      })
    } else if (
      ts.isMethodDeclaration(declaration) ||
      ts.isMethodSignature(declaration) ||
      ts.isPropertyAssignment(declaration) ||
      ts.isPropertyDeclaration(declaration)
    ) {
      const declarationName = this.propertyName(declaration.name)
      this.forEachAncestor(declaration.parent, ancestor => {
        for (const member of ancestor.members) {
          if (
            member.name &&
            declarationName === this.propertyName(member.name)
          ) {
            pushImplementation(member, true)
          }
        }
      })
    }
    return relationships
  }

  // Equivalent to node.getText() except guards against nodes without "real
  // positions", which throw an error when calling `.getText()`.
  private safeGetText(node: ts.Node): string {
    // TODO: come up with better default
    return node.pos >= 0 ? node.getText() : `${node}`
  }

  private propertyName(name: ts.PropertyName): string {
    if (
      ts.isIdentifier(name) ||
      ts.isStringLiteral(name) ||
      ts.isNoSubstitutionTemplateLiteral(name) ||
      ts.isNumericLiteral(name) ||
      ts.isPrivateIdentifier(name)
    ) {
      return name.text
    }
    return this.safeGetText(name)
  }

  private actualFilename(file: ts.SourceFile): string {
    if (!this.options.followSourceMapping) {
      return file.fileName
    }
    const sourceMapCommentRegExp = /^\/\/[@#] source[M]appingURL=(.+)\r?\n?$/
    const whitespaceOrMapCommentRegExp = /^\s*(\/\/[@#] .*)?$/
    const lineStarts = file.getLineStarts()
    for (
      let lineNumber = lineStarts.length - 1;
      lineNumber >= 0;
      lineNumber--
    ) {
      const start = lineStarts[lineNumber]
      const end = file.getLineEndOfPosition(start)
      const line = file.text.slice(start, end)
      const comment = sourceMapCommentRegExp.exec(line)
      if (comment) {
        const sourceMappingURL = comment[1].trimEnd()
        const dirname = path.dirname(file.fileName)
        const mapFile = path.join(dirname, sourceMappingURL)
        try {
          const mapText = fs.readFileSync(mapFile).toString()
          const mapping = JSON.parse(mapText)
          const source = mapping?.sources?.[0]
          if (typeof source === 'string') {
            const originalPath = path.resolve(dirname, source)
            if (fs.statSync(originalPath).isFile()) {
              return originalPath
            }
          }
        } catch (error) {
          // ignore
          // console.log('boom', error)
        }
      }
      // If we see a non-whitespace/map comment-like line, break, to avoid scanning up the entire file
      if (!line.match(whitespaceOrMapCommentRegExp)) {
        break
      }
    }
    return file.fileName
  }

  private metaDescriptorSymbol(node: ts.Node, name: string): ScipSymbol {
    try {
      let counter = this.propertyCounters.get(name)
      if (!counter) {
        counter = new Counter()
        this.propertyCounters.set(name, counter)
      }
      return this.cached(
        node,
        ScipSymbol.global(
          this.scipSymbol(node.getSourceFile()),
          metaDescriptor(`${name}${counter.next()}`)
        )
      )
    } catch (error) {
      console.log({ pos: node.pos }, error)
      return ScipSymbol.empty()
    }
  }

  private scipSymbol(node: ts.Node): ScipSymbol {
    if (node === undefined) {
      return ScipSymbol.empty()
    }
    const fromCache: ScipSymbol | undefined =
      this.globalSymbolTable.get(node) || this.localSymbolTable.get(node)
    if (fromCache) {
      return fromCache
    }

    if (ts.isBlock(node)) {
      return ScipSymbol.empty()
    }
    if (ts.isSourceFile(node)) {
      const package_ = this.packages.symbol(this.actualFilename(node))
      if (package_.isEmpty()) {
        return this.cached(node, ScipSymbol.anonymousPackage())
      }
      return this.cached(node, package_)
    }
    if (
      ts.isPropertyAssignment(node) ||
      ts.isPropertySignature(node) ||
      ts.isShorthandPropertyAssignment(node)
    ) {
      return this.metaDescriptorSymbol(node, this.propertyName(node.name))
    }

    if (ts.isIndexSignatureDeclaration(node)) {
      return this.metaDescriptorSymbol(
        node,
        node.name ? this.propertyName(node.name) : 'indexedSignature'
      )
    }

    if (ts.isJsxAttribute(node)) {
      // NOTE(olafurpg): the logic below is a bit convoluted but I spent several
      // hours and failed to come up with a cleaner solution. JSX attributes
      // have custom typechecking rules, as documented here
      // https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking The
      // only way to access the actual symbol we want to reference appears to go
      // through the JSX opening element, which is the grandparent of the JSX
      // attribute node. Through the signature of the opening element, we get
      // the permitted attributes by querying the type of the first parameter.
      const jsxElement = node.parent.parent
      const props = this.checker
        .getResolvedSignature(jsxElement)
        ?.getParameters()?.[0]
      if (props) {
        try {
          const tpe = this.checker.getTypeOfSymbolAtLocation(props, node)
          const property = tpe.getProperty(
            ts_inline.getTextOfJsxAttributeName(node.name)
          )
          for (const decl of property?.declarations || []) {
            return this.scipSymbol(decl)
          }
        } catch {
          // TODO: https://github.com/sourcegraph/lsif-typescript/issues/34
          // continue regardless of error, the TypeScript compiler tends to
          // trigger stack overflows in getTypeOfSymbolAtLocation and we
          // don't know why yet.
        }
      }
    }

    const owner = this.scipSymbol(node.parent)
    if (owner.isEmpty() || owner.isLocal()) {
      return this.newLocalSymbol(node)
    }

    if (isAnonymousContainerOfSymbols(node)) {
      return this.cached(node, this.scipSymbol(node.parent))
    }

    if (
      ts.isImportSpecifier(node) ||
      ts.isImportClause(node) ||
      ts.isNamespaceImport(node)
    ) {
      const tpe = this.checker.getTypeAtLocation(node)
      for (const declaration of this.declarations(tpe)) {
        return this.scipSymbol(declaration)
      }
    }

    const desc = this.descriptor(node)
    if (desc) {
      return this.cached(node, ScipSymbol.global(owner, desc))
    }

    // Fallback case: generate a local symbol. It's not a bug when this case
    // happens. For example, we hit this case for block `{}` that are local
    // symbols, which are direct children of global symbols (toplevel
    // functions).
    return this.newLocalSymbol(node)
  }

  private newLocalSymbol(node: ts.Node): ScipSymbol {
    const symbol = ScipSymbol.local(this.localCounter.next())
    this.localSymbolTable.set(node, symbol)
    return symbol
  }
  private cached(node: ts.Node, symbol: ScipSymbol): ScipSymbol {
    this.globalSymbolTable.set(node, symbol)
    if (this.isExternalSymbol(node)) {
      this.emitExternalSymbol(node, symbol)
    }
    return symbol
  }

  public emitExternalSymbol(declaration: ts.Node, symbol: ScipSymbol): void {
    if (!this.options.emitExternalSymbols) {
      return
    }
    if (this.cache.externalSymbols.has(symbol.value)) {
      return
    }
    const name = declarationName(declaration)
    if (!name) {
      return
    }
    const tsSymbol = this.getTSSymbolAtLocation(name)
    if (!tsSymbol) {
      return
    }
    this.cache.externalSymbols.set(
      symbol.value,
      this.symbolInformation(name, tsSymbol, declaration, symbol)
    )
  }

  public isExternalSymbol(node: ts.Node): boolean {
    // Simple approximation to filter out symbols that are defined by external projects.
    return (
      node.pos >= 0 &&
      node.getSourceFile?.()?.fileName?.includes?.('node_modules')
    )
  }

  private descriptor(node: ts.Node): scip.scip.Descriptor | undefined {
    if (
      ts.isInterfaceDeclaration(node) ||
      ts.isEnumDeclaration(node) ||
      ts.isTypeAliasDeclaration(node)
    ) {
      return typeDescriptor(this.propertyName(node.name))
    }
    if (ts.isClassLike(node)) {
      const name = node.name ? this.propertyName(node.name) : undefined
      if (name) {
        return typeDescriptor(name)
      }
    }
    if (
      ts.isFunctionDeclaration(node) ||
      ts.isMethodSignature(node) ||
      ts.isMethodDeclaration(node)
    ) {
      const name = node.name ? this.propertyName(node.name) : undefined
      if (name) {
        return methodDescriptor(name)
      }
    }
    if (ts.isConstructorDeclaration(node)) {
      return methodDescriptor('<constructor>')
    }
    if (
      ts.isPropertyDeclaration(node) ||
      ts.isPropertySignature(node) ||
      ts.isEnumMember(node) ||
      ts.isVariableDeclaration(node)
    ) {
      return termDescriptor(
        ts.isPropertyName(node.name)
          ? this.propertyName(node.name)
          : this.safeGetText(node.name)
      )
    }
    if (ts.isAccessor(node)) {
      const prefix = ts.isGetAccessor(node) ? '<get>' : '<set>'
      return methodDescriptor(prefix + this.propertyName(node.name))
    }
    if (ts.isModuleDeclaration(node)) {
      return packageDescriptor(node.name.text)
    }
    if (ts.isParameter(node)) {
      return parameterDescriptor(node.name.getText())
    }
    if (ts.isTypeParameterDeclaration(node)) {
      return typeParameterDescriptor(this.safeGetText(node.name))
    }
    if (ts.isTypeReferenceNode(node)) {
      return metaDescriptor(this.safeGetText(node.typeName))
    }
    if (ts.isTypeLiteralNode(node)) {
      return metaDescriptor('typeLiteral' + this.localCounter.next().toString())
    }
    return undefined
  }

  private signatureForDocumentation(node: ts.Node, sym: ts.Symbol): string {
    const kind = scriptElementKind(node, sym)
    const type = (): string => {
      if (ts.isSourceFile(node)) {
        return ''
      }
      return this.checker.typeToString(this.checker.getTypeAtLocation(node))
    }
    const asSignatureDeclaration = (
      node: ts.Node,
      sym: ts.Symbol
    ): ts.SignatureDeclaration | undefined => {
      const declaration = sym.declarations?.[0]
      if (!declaration) {
        return undefined
      }
      return ts.isConstructorDeclaration(node)
        ? node
        : ts.isFunctionDeclaration(declaration)
          ? declaration
          : ts.isMethodDeclaration(declaration)
            ? declaration
            : undefined
    }
    const signature = (): string | undefined => {
      const signatureDeclaration = asSignatureDeclaration(node, sym)
      if (!signatureDeclaration) {
        return undefined
      }
      const signature =
        this.checker.getSignatureFromDeclaration(signatureDeclaration)
      return signature ? this.checker.signatureToString(signature) : undefined
    }
    switch (kind) {
      case ts.ScriptElementKind.localVariableElement:
      case ts.ScriptElementKind.variableElement: {
        return 'var ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.memberVariableElement: {
        return '(property) ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.parameterElement: {
        return '(parameter) ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.constElement: {
        return 'const ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.letElement: {
        return 'let ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.alias: {
        return 'type ' + this.safeGetText(node)
      }
      case ts.ScriptElementKind.classElement:
      case ts.ScriptElementKind.localClassElement: {
        if (ts.isConstructorDeclaration(node)) {
          return 'constructor' + (signature() || '')
        }
        return 'class ' + this.safeGetText(node)
      }
      case ts.ScriptElementKind.interfaceElement: {
        return 'interface ' + this.safeGetText(node)
      }
      case ts.ScriptElementKind.enumElement: {
        return 'enum ' + this.safeGetText(node)
      }
      case ts.ScriptElementKind.enumMemberElement: {
        let suffix = ''
        const declaration = sym.declarations?.[0]
        if (declaration && ts.isEnumMember(declaration)) {
          const constantValue = this.checker.getConstantValue(declaration)
          if (constantValue) {
            suffix = ' = ' + constantValue.toString()
          }
        }
        return '(enum member) ' + this.safeGetText(node) + suffix
      }
      case ts.ScriptElementKind.functionElement: {
        return 'function ' + this.safeGetText(node) + (signature() || type())
      }
      case ts.ScriptElementKind.memberFunctionElement: {
        return '(method) ' + this.safeGetText(node) + (signature() || type())
      }
      case ts.ScriptElementKind.memberGetAccessorElement: {
        return 'get ' + this.safeGetText(node) + ': ' + type()
      }
      case ts.ScriptElementKind.memberSetAccessorElement: {
        return 'set ' + this.safeGetText(node) + type()
      }
      case ts.ScriptElementKind.constructorImplementationElement: {
        return ''
      }
    }
    return this.safeGetText(node) + ': ' + type()
  }

  // Invokes the `onAncestor` callback for all "ancestors" of the provided node,
  // where "ancestor" is loosely defined as the superclass or superinterface of
  // that node. The callback is invoked on the `node` parameter itself if it's
  // class-like or an interface.
  private forEachAncestor(
    node: ts.Node,
    onAncestor: (
      ancestor: ts.ClassLikeDeclaration | ts.InterfaceDeclaration
    ) => void
  ): void {
    const isVisited = new Set<ts.Node>()
    const loop = (declaration: ts.Node): void => {
      if (isVisited.has(declaration)) {
        return
      }
      isVisited.add(declaration)
      if (
        ts.isClassLike(declaration) ||
        ts.isInterfaceDeclaration(declaration)
      ) {
        onAncestor(declaration)
      }
      if (ts.isObjectLiteralExpression(declaration)) {
        const tpe = this.inferredTypeOfObjectLiteral(
          declaration.parent,
          declaration
        )
        for (const symbolDeclaration of tpe.symbol?.declarations || []) {
          loop(symbolDeclaration)
        }
      } else if (
        ts.isClassLike(declaration) ||
        ts.isInterfaceDeclaration(declaration)
      ) {
        for (const heritageClause of declaration?.heritageClauses || []) {
          for (const tpe of heritageClause.types) {
            const ancestorSymbol = this.getTSSymbolAtLocation(tpe.expression)
            if (ancestorSymbol) {
              for (const ancestorDecl of ancestorSymbol.declarations || []) {
                loop(ancestorDecl)
              }
            }
          }
        }
      }
    }
    loop(node)
  }

  // Returns the "inferred" type of the provided object literal, where
  // "inferred" is loosely defined as the type that is expected in the position
  // where the object literal appears.  For example, the object literal in
  // `const x: SomeInterface = {y: 42}` has the inferred type `SomeInterface`
  // even if `this.checker.getTypeAtLocation({y: 42})` does not return
  // `SomeInterface`. The object literal could satisfy many types, but in this
  // particular location must only satisfy `SomeInterface`.
  private inferredTypeOfObjectLiteral(
    node: ts.Node,
    literal: ts.ObjectLiteralExpression
  ): ts.Type {
    if (
      ts.isIfStatement(node) ||
      ts.isForStatement(node) ||
      ts.isForInStatement(node) ||
      ts.isForOfStatement(node) ||
      ts.isWhileStatement(node) ||
      ts.isDoStatement(node) ||
      ts.isReturnStatement(node) ||
      ts.isBlock(node)
    ) {
      return this.inferredTypeOfObjectLiteral(node.parent, literal)
    }

    if (ts.isVariableDeclaration(node)) {
      // Example, return `SomeInterface` from `const x: SomeInterface = {y: 42}`.
      return this.checker.getTypeAtLocation(node.name)
    }

    if (ts.isFunctionLike(node)) {
      const functionType = this.checker.getTypeAtLocation(node)
      const callSignatures = functionType.getCallSignatures()
      if (callSignatures.length > 0) {
        return callSignatures[0].getReturnType()
      }
    }

    if (ts.isCallOrNewExpression(node)) {
      // Example: return the type of the second parameter of `someMethod` from
      // the expression `someMethod(someParameter, {y: 42})`.
      const signature = this.checker.getResolvedSignature(node)
      for (const [index, argument] of (node.arguments || []).entries()) {
        if (argument === literal) {
          const parameterSymbol = signature?.getParameters()[index]
          if (parameterSymbol) {
            return this.checker.getTypeOfSymbolAtLocation(parameterSymbol, node)
          }
        }
      }
    }

    return this.checker.getTypeAtLocation(literal)
  }
}

function isAnonymousContainerOfSymbols(node: ts.Node): boolean {
  return (
    ts.isModuleBlock(node) ||
    ts.isImportDeclaration(node) ||
    (ts.isImportClause(node) && !node.name) ||
    ts.isNamedImports(node) ||
    ts.isVariableStatement(node) ||
    ts.isVariableDeclarationList(node)
  )
}

function scriptElementKind(
  node: ts.Node,
  sym: ts.Symbol
): ts.ScriptElementKind {
  const flags = sym.getFlags()
  if (flags & ts.SymbolFlags.TypeAlias) {
    return ts.ScriptElementKind.alias
  }
  if (flags & ts.SymbolFlags.Class) {
    return ts.ScriptElementKind.classElement
  }
  if (flags & ts.SymbolFlags.Interface) {
    return ts.ScriptElementKind.interfaceElement
  }
  if (flags & ts.SymbolFlags.Enum) {
    return ts.ScriptElementKind.enumElement
  }
  if (flags & ts.SymbolFlags.EnumMember) {
    return ts.ScriptElementKind.enumMemberElement
  }
  if (flags & ts.SymbolFlags.Method) {
    return ts.ScriptElementKind.memberFunctionElement
  }
  if (flags & ts.SymbolFlags.GetAccessor) {
    return ts.ScriptElementKind.memberGetAccessorElement
  }
  if (flags & ts.SymbolFlags.SetAccessor) {
    return ts.ScriptElementKind.memberSetAccessorElement
  }
  if (flags & ts.SymbolFlags.Constructor) {
    return ts.ScriptElementKind.constructorImplementationElement
  }
  if (flags & ts.SymbolFlags.Function) {
    return ts.ScriptElementKind.functionElement
  }
  if (flags & ts.SymbolFlags.Variable) {
    if (ts_inline.isParameter(sym)) {
      return ts.ScriptElementKind.parameterElement
    }
    if (node.flags & ts.NodeFlags.Const) {
      return ts.ScriptElementKind.constElement
    }
    if (node.flags & ts.NodeFlags.Let) {
      return ts.ScriptElementKind.letElement
    }
    return ts.ScriptElementKind.variableElement
  }
  if (flags & ts.SymbolFlags.ClassMember) {
    return ts.ScriptElementKind.memberVariableElement
  }
  return ts.ScriptElementKind.unknown
}

function isEqualOccurrence(
  a: scip.scip.Occurrence,
  b: scip.scip.Occurrence
): boolean {
  return (
    a.symbol_roles === b.symbol_roles &&
    a.symbol === b.symbol &&
    isEqualArray(a.range, b.range)
  )
}

function isEqualArray<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false
  }
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      return false
    }
  }
  return true
}

function declarationName(node: ts.Node): ts.Node | undefined {
  if (
    ts.isBindingElement(node) ||
    ts.isEnumDeclaration(node) ||
    ts.isEnumMember(node) ||
    ts.isVariableDeclaration(node) ||
    ts.isPropertyDeclaration(node) ||
    ts.isAccessor(node) ||
    ts.isMethodSignature(node) ||
    ts.isMethodDeclaration(node) ||
    ts.isPropertySignature(node) ||
    ts.isFunctionDeclaration(node) ||
    ts.isModuleDeclaration(node) ||
    ts.isPropertyAssignment(node) ||
    ts.isShorthandPropertyAssignment(node) ||
    ts.isParameter(node) ||
    ts.isTypeParameterDeclaration(node) ||
    ts.isTypeAliasDeclaration(node) ||
    ts.isInterfaceDeclaration(node) ||
    ts.isClassDeclaration(node)
  ) {
    return node.name
  }
  return undefined
}

/**
 * For example:
 *
 * const a = 1
 *       ^ node
 *       ^ node.parent.name
 *       ^^^^^ node.parent
 *
 * function a(): void {}
 *          ^ node
 *          ^ node.parent.name
 * ^^^^^^^^^^^^^^^^^^^^^ node.parent
 */
function isDefinition(node: ts.Node): boolean {
  return (
    declarationName(node.parent) === node || ts.isConstructorDeclaration(node)
  )
}
