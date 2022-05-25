import * as ts from 'typescript'

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
import * as lsif from './lsif'
import { LsifSymbol } from './LsifSymbol'
import { lsiftyped } from './main'
import { Packages } from './Packages'
import { Range } from './Range'
import * as ts_inline from './TypeScriptInternal'

type Descriptor = lsif.lib.codeintel.lsiftyped.Descriptor
type Relationship = lsif.lib.codeintel.lsiftyped.Relationship

export class FileIndexer {
  private localCounter = new Counter()
  private propertyCounters: Map<string, Counter> = new Map()
  private localSymbolTable: Map<ts.Node, LsifSymbol> = new Map()
  constructor(
    public readonly checker: ts.TypeChecker,
    public readonly input: Input,
    public readonly document: lsif.lib.codeintel.lsiftyped.Document,
    public readonly globalSymbolTable: Map<ts.Node, LsifSymbol>,
    public readonly packages: Packages,
    public readonly sourceFile: ts.SourceFile
  ) {}
  public index(): void {
    this.visit(this.sourceFile)
  }
  private visit(node: ts.Node): void {
    if (ts.isIdentifier(node)) {
      const sym = this.getTSSymbolAtLocation(node)
      if (sym) {
        this.visitIdentifier(node, sym)
      }
    }
    ts.forEachChild(node, node => this.visit(node))
  }

  // Get the ts.Symbol corresponding to the current node, potentially de-aliasing
  // the direct symbol to account for imports.
  //
  // This code is directly based off src/services/goToDefinition.ts.
  private getTSSymbolAtLocation(node: ts.Node): ts.Symbol | undefined {
    const symbol = this.checker.getSymbolAtLocation(node)
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

  private visitIdentifier(identifier: ts.Identifier, sym: ts.Symbol): void {
    const range = Range.fromNode(identifier).toLsif()
    let role = 0
    const isDefinition = this.declarationName(identifier.parent) === identifier
    if (isDefinition) {
      role |= lsiftyped.SymbolRole.Definition
    }
    for (const declaration of sym?.declarations || []) {
      const lsifSymbol = this.lsifSymbol(declaration)
      if (lsifSymbol.isEmpty()) {
        // Skip empty symbols
        continue
      }
      this.document.occurrences.push(
        new lsif.lib.codeintel.lsiftyped.Occurrence({
          range,
          symbol: lsifSymbol.value,
          symbol_roles: role,
        })
      )
      if (isDefinition) {
        this.addSymbolInformation(identifier, sym, declaration, lsifSymbol)
        this.handleShorthandPropertyDefinition(declaration, range)
        // Only emit one symbol for definitions sites, see https://github.com/sourcegraph/lsif-typescript/issues/45
        break
      }
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
    if (declaration.kind === ts.SyntaxKind.ShorthandPropertyAssignment) {
      const valueSymbol =
        this.checker.getShorthandAssignmentValueSymbol(declaration)
      if (!valueSymbol) {
        return
      }
      for (const symbol of valueSymbol?.declarations || []) {
        const lsifSymbol = this.lsifSymbol(symbol)
        if (lsifSymbol.isEmpty()) {
          continue
        }
        this.document.occurrences.push(
          new lsif.lib.codeintel.lsiftyped.Occurrence({
            range,
            symbol: lsifSymbol.value,
          })
        )
      }
    }
  }

  private addSymbolInformation(
    node: ts.Node,
    sym: ts.Symbol,
    declaration: ts.Node,
    symbol: LsifSymbol
  ): void {
    const documentation = [
      '```ts\n' + this.signatureForDocumentation(node, sym) + '\n```',
    ]
    const docstring = sym.getDocumentationComment(this.checker)
    if (docstring.length > 0) {
      documentation.push(ts.displayPartsToString(docstring))
    }

    this.document.symbols.push(
      new lsiftyped.SymbolInformation({
        symbol: symbol.value,
        documentation,
        relationships: this.relationships(declaration, symbol),
      })
    )
  }

  private relationships(
    declaration: ts.Node,
    declarationSymbol: LsifSymbol
  ): Relationship[] {
    const relationships: Relationship[] = []
    const isAddedSymbol = new Set<string>()
    const pushImplementation = (
      node: ts.NamedDeclaration,
      isReferences: boolean
    ): void => {
      const symbol = this.lsifSymbol(node)
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
        new lsiftyped.Relationship({
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
      const declarationName = declaration.name.getText()
      this.forEachAncestor(declaration.parent, ancestor => {
        for (const member of ancestor.members) {
          if (declarationName === member.name?.getText()) {
            pushImplementation(member, true)
          }
        }
      })
    }
    return relationships
  }
  private declarationName(node: ts.Node): ts.Node | undefined {
    if (
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

  private lsifSymbol(node: ts.Node): LsifSymbol {
    const fromCache: LsifSymbol | undefined =
      this.globalSymbolTable.get(node) || this.localSymbolTable.get(node)
    if (fromCache) {
      return fromCache
    }
    if (ts.isBlock(node)) {
      return LsifSymbol.empty()
    }
    if (ts.isSourceFile(node)) {
      const package_ = this.packages.symbol(node.fileName)
      if (!package_) {
        return this.cached(node, LsifSymbol.empty())
      }
      return this.cached(node, package_)
    }
    if (
      ts.isPropertyAssignment(node) ||
      ts.isShorthandPropertyAssignment(node)
    ) {
      const name = node.name.getText()
      let counter = this.propertyCounters.get(name)
      if (!counter) {
        counter = new Counter()
        this.propertyCounters.set(name, counter)
      }
      return this.cached(
        node,
        LsifSymbol.global(
          this.lsifSymbol(node.getSourceFile()),
          metaDescriptor(`${node.name.getText()}${counter.next()}`)
        )
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
          const property = tpe.getProperty(node.name.text)
          for (const decl of property?.declarations || []) {
            return this.lsifSymbol(decl)
          }
        } catch {
          // TODO: https://github.com/sourcegraph/lsif-typescript/issues/34
          // continue regardless of error, the TypeScript compiler tends to
          // trigger stack overflows in getTypeOfSymbolAtLocation and we
          // don't know why yet.
        }
      }
    }

    const owner = this.lsifSymbol(node.parent)
    if (owner.isEmpty() || owner.isLocal()) {
      return this.newLocalSymbol(node)
    }

    if (isAnonymousContainerOfSymbols(node)) {
      return this.cached(node, this.lsifSymbol(node.parent))
    }

    if (ts.isImportSpecifier(node) || ts.isImportClause(node)) {
      const tpe = this.checker.getTypeAtLocation(node)
      for (const declaration of tpe.symbol?.declarations || []) {
        return this.lsifSymbol(declaration)
      }
    }

    const desc = this.descriptor(node)
    if (desc) {
      return this.cached(node, LsifSymbol.global(owner, desc))
    }

    // Fallback case: generate a local symbol. It's not a bug when this case
    // happens. For example, we hit this case for block `{}` that are local
    // symbols, which are direct children of global symbols (toplevel
    // functions).
    return this.newLocalSymbol(node)
  }

  private newLocalSymbol(node: ts.Node): LsifSymbol {
    const symbol = LsifSymbol.local(this.localCounter.next())
    this.localSymbolTable.set(node, symbol)
    return symbol
  }
  private cached(node: ts.Node, symbol: LsifSymbol): LsifSymbol {
    this.globalSymbolTable.set(node, symbol)
    return symbol
  }
  private descriptor(node: ts.Node): Descriptor | undefined {
    if (
      ts.isInterfaceDeclaration(node) ||
      ts.isEnumDeclaration(node) ||
      ts.isTypeAliasDeclaration(node)
    ) {
      return typeDescriptor(node.name.getText())
    }
    if (ts.isClassLike(node)) {
      const name = node.name?.getText()
      if (name) {
        return typeDescriptor(name)
      }
    }
    if (
      ts.isFunctionDeclaration(node) ||
      ts.isMethodSignature(node) ||
      ts.isMethodDeclaration(node)
    ) {
      const name = node.name?.getText()
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
      return termDescriptor(node.name.getText())
    }
    if (ts.isAccessor(node)) {
      const prefix = ts.isGetAccessor(node) ? '<get>' : '<set>'
      return methodDescriptor(prefix + node.name.getText())
    }
    if (ts.isModuleDeclaration(node)) {
      return packageDescriptor(node.name.getText())
    }
    if (ts.isParameter(node)) {
      return parameterDescriptor(node.name.getText())
    }
    if (ts.isTypeParameterDeclaration(node)) {
      return typeParameterDescriptor(node.name.getText())
    }
    return undefined
  }

  private signatureForDocumentation(node: ts.Node, sym: ts.Symbol): string {
    const kind = scriptElementKind(node, sym)
    const type = (): string =>
      this.checker.typeToString(this.checker.getTypeAtLocation(node))
    const signature = (): string | undefined => {
      const declaration = sym.declarations?.[0]
      if (!declaration) {
        return undefined
      }
      const signatureDeclaration: ts.SignatureDeclaration | undefined =
        ts.isFunctionDeclaration(declaration)
          ? declaration
          : ts.isMethodDeclaration(declaration)
          ? declaration
          : undefined
      if (!signatureDeclaration) {
        return undefined
      }
      const signature =
        this.checker.getSignatureFromDeclaration(signatureDeclaration)
      return signature ? this.checker.signatureToString(signature) : undefined
    }
    switch (kind) {
      case ts.ScriptElementKind.localVariableElement:
      case ts.ScriptElementKind.variableElement:
        return 'var ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.memberVariableElement:
        return '(property) ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.parameterElement:
        return '(parameter) ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.constElement:
        return 'const ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.letElement:
        return 'let ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.alias:
        return 'type ' + node.getText()
      case ts.ScriptElementKind.classElement:
      case ts.ScriptElementKind.localClassElement:
        return 'class ' + node.getText()
      case ts.ScriptElementKind.interfaceElement:
        return 'interface ' + node.getText()
      case ts.ScriptElementKind.enumElement:
        return 'enum ' + node.getText()
      case ts.ScriptElementKind.enumMemberElement: {
        let suffix = ''
        const declaration = sym.declarations?.[0]
        if (declaration && ts.isEnumMember(declaration)) {
          const constantValue = this.checker.getConstantValue(declaration)
          if (constantValue) {
            suffix = ' = ' + constantValue.toString()
          }
        }
        return '(enum member) ' + node.getText() + suffix
      }
      case ts.ScriptElementKind.functionElement:
        return 'function ' + node.getText() + (signature() || type())
      case ts.ScriptElementKind.memberFunctionElement:
        return '(method) ' + node.getText() + (signature() || type())
      case ts.ScriptElementKind.memberGetAccessorElement:
        return 'get ' + node.getText() + ': ' + type()
      case ts.ScriptElementKind.memberSetAccessorElement:
        return 'set ' + node.getText() + type()
      case ts.ScriptElementKind.constructorImplementationElement:
        return ''
    }
    return node.getText() + ': ' + type()
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
        const tpe = this.inferredTypeOfObjectLiteral(declaration)
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
    node: ts.ObjectLiteralExpression
  ): ts.Type {
    if (ts.isVariableDeclaration(node.parent)) {
      // Example, return `SomeInterface` from `const x: SomeInterface = {y: 42}`.
      return this.checker.getTypeAtLocation(node.parent.name)
    }

    if (ts.isCallOrNewExpression(node.parent)) {
      // Example: return the type of the second parameter of `someMethod` from
      // the expression `someMethod(someParameter, {y: 42})`.
      const signature = this.checker.getResolvedSignature(node.parent)
      for (const [index, argument] of (node.parent.arguments || []).entries()) {
        if (argument === node) {
          const parameterSymbol = signature?.getParameters()[index]
          if (parameterSymbol) {
            return this.checker.getTypeOfSymbolAtLocation(parameterSymbol, node)
          }
        }
      }
    }

    return this.checker.getTypeAtLocation(node)
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
