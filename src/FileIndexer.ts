import path from 'path'

import * as ts from 'typescript'

import { ProjectOptions } from './CommandLineOptions'
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
    public readonly globalConstructorTable: Map<ts.ClassDeclaration, boolean>,
    public readonly packages: Packages,
    public readonly sourceFile: ts.SourceFile
  ) {
    this.workingDirectoryRegExp = new RegExp(options.cwd, 'g')
  }
  public index(): void {
    // Uncomment below if you want to skip certain files for local development.
    // if (!this.sourceFile.fileName.includes('constructor')) {
    //   return
    // }

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
        kind: scip.scip.SymbolInformation.Kind.Module,
        display_name: moduleName,
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
      ? (node.getFirstToken() ?? node)
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

  private getDeclarationsForPropertyAssignment(
    node: ts.Node
  ): ts.Declaration[] | undefined {
    const objectElement = ts_inline.getContainingObjectLiteralElement(node)
    if (!objectElement) {
      return
    }
    const contextualType = this.checker.getContextualType(objectElement.parent)
    if (contextualType === undefined) {
      return
    }
    const symbol = ts_inline.getPropertySymbolFromContextualType(
      objectElement,
      contextualType
    )
    return symbol?.getDeclarations()
  }

  private visitSymbolOccurrence(node: ts.Node, sym: ts.Symbol): void {
    const isConstructor = ts.isConstructorDeclaration(node)
    // For constructors, this method is passed the declaration node and not the identifier node.
    // In either case, this method needs to get the range of the "name" of the declaration, for constructors we
    // get the firstToken which contains the text "constructor".
    const range = Range.fromNode(
      isConstructor ? (node.getFirstToken() ?? node) : node
    ).toLsif()
    let role = 0
    let declarations: ts.Node[] =
      this.getDeclarationsForPropertyAssignment(node) ?? []
    const isDefinitionNode = declarations.length === 0 && isDefinition(node)
    if (isDefinitionNode) {
      role |= scip.scip.SymbolRole.Definition
    }
    if (declarations.length === 0) {
      declarations = ts.isConstructorDeclaration(node)
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
    }
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
        ts.isInterfaceDeclaration(declaration) ||
        ts.isConstructorDeclaration(declaration)
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
    const property = tpe.getProperty(node.getText())
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
    const documentation = [
      '```ts\n' +
        this.hideWorkingDirectory(this.signatureForDocumentation(node, sym)) +
        '\n```',
    ]
    const docstring = sym.getDocumentationComment(this.checker)
    if (docstring.length > 0) {
      documentation.push(ts.displayPartsToString(docstring))
    }

    this.document.symbols.push(
      new scip.scip.SymbolInformation({
        symbol: symbol.value,
        documentation,
        relationships: this.relationships(declaration, symbol),
        kind: symbolInformationKind(sym),
        display_name: sym.getName(),
      })
    )
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
  private scipSymbol(node: ts.Node): ScipSymbol {
    const fromCache: ScipSymbol | undefined =
      this.globalSymbolTable.get(node) || this.localSymbolTable.get(node)
    if (fromCache) {
      return fromCache
    }
    if (ts.isBlock(node)) {
      return ScipSymbol.empty()
    }
    if (ts.isSourceFile(node)) {
      const package_ = this.packages.symbol(node.fileName)
      if (package_.isEmpty()) {
        return this.cached(node, ScipSymbol.anonymousPackage())
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
        ScipSymbol.global(
          this.scipSymbol(node.getSourceFile()),
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
      for (const declaration of tpe.symbol?.declarations || []) {
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
    return symbol
  }
  private descriptor(node: ts.Node): scip.scip.Descriptor | undefined {
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
    if (ts.isTypeReferenceNode(node)) {
      return metaDescriptor(node.typeName.getText())
    }
    if (ts.isTypeLiteralNode(node)) {
      return metaDescriptor('typeLiteral' + this.localCounter.next().toString())
    }
    return undefined
  }

  private signatureForDocumentation(node: ts.Node, sym: ts.Symbol): string {
    const kind = scriptElementKind(node, sym)
    const type = (): string =>
      this.checker.typeToString(this.checker.getTypeAtLocation(node))
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
        return 'var ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.memberVariableElement: {
        return '(property) ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.parameterElement: {
        return '(parameter) ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.constElement: {
        return 'const ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.letElement: {
        return 'let ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.alias: {
        return 'type ' + node.getText()
      }
      case ts.ScriptElementKind.classElement:
      case ts.ScriptElementKind.localClassElement: {
        if (ts.isConstructorDeclaration(node)) {
          return 'constructor' + (signature() || '')
        }
        return 'class ' + node.getText()
      }
      case ts.ScriptElementKind.interfaceElement: {
        return 'interface ' + node.getText()
      }
      case ts.ScriptElementKind.enumElement: {
        return 'enum ' + node.getText()
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
        return '(enum member) ' + node.getText() + suffix
      }
      case ts.ScriptElementKind.functionElement: {
        return 'function ' + node.getText() + (signature() || type())
      }
      case ts.ScriptElementKind.memberFunctionElement: {
        return '(method) ' + node.getText() + (signature() || type())
      }
      case ts.ScriptElementKind.memberGetAccessorElement: {
        return 'get ' + node.getText() + ': ' + type()
      }
      case ts.ScriptElementKind.memberSetAccessorElement: {
        return 'set ' + node.getText() + type()
      }
      case ts.ScriptElementKind.constructorImplementationElement: {
        return ''
      }
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
        const tpe =
          this.checker.getContextualType(declaration) ??
          this.checker.getTypeAtLocation(declaration)
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

function symbolInformationKind(
  sym: ts.Symbol
): scip.scip.SymbolInformation.Kind {
  const flags = sym.getFlags()
  if (flags & ts.SymbolFlags.Class) {
    return scip.scip.SymbolInformation.Kind.Class
  }
  if (flags & ts.SymbolFlags.Interface) {
    return scip.scip.SymbolInformation.Kind.Interface
  }
  if (flags & ts.SymbolFlags.Enum) {
    return scip.scip.SymbolInformation.Kind.Enum
  }
  if (flags & ts.SymbolFlags.EnumMember) {
    return scip.scip.SymbolInformation.Kind.EnumMember
  }
  if (flags & ts.SymbolFlags.TypeAlias) {
    return scip.scip.SymbolInformation.Kind.TypeAlias
  }
  if (flags & ts.SymbolFlags.TypeParameter) {
    return scip.scip.SymbolInformation.Kind.TypeParameter
  }
  if (flags & ts.SymbolFlags.Function) {
    return scip.scip.SymbolInformation.Kind.Function
  }
  if (flags & ts.SymbolFlags.Method) {
    return scip.scip.SymbolInformation.Kind.Method
  }
  if (flags & ts.SymbolFlags.Constructor) {
    return scip.scip.SymbolInformation.Kind.Constructor
  }
  if (flags & ts.SymbolFlags.GetAccessor) {
    return scip.scip.SymbolInformation.Kind.Getter
  }
  if (flags & ts.SymbolFlags.SetAccessor) {
    return scip.scip.SymbolInformation.Kind.Setter
  }
  if (flags & ts.SymbolFlags.Property) {
    return scip.scip.SymbolInformation.Kind.Property
  }
  if (flags & ts.SymbolFlags.Variable) {
    return scip.scip.SymbolInformation.Kind.Variable
  }
  if (flags & ts.SymbolFlags.Module) {
    if (flags & ts.SymbolFlags.NamespaceModule) {
      return scip.scip.SymbolInformation.Kind.Namespace
    }
    return scip.scip.SymbolInformation.Kind.Module
  }
  if (flags & ts.SymbolFlags.Signature) {
    return scip.scip.SymbolInformation.Kind.Signature
  }
  if (flags & ts.SymbolFlags.TypeLiteral) {
    return scip.scip.SymbolInformation.Kind.Type
  }
  if (flags & ts.SymbolFlags.ObjectLiteral) {
    return scip.scip.SymbolInformation.Kind.Object
  }
  return scip.scip.SymbolInformation.Kind.UnspecifiedKind
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
