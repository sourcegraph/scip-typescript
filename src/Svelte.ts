import {
  originalPositionFor,
  SourceMapInput,
  TraceMap,
} from '@jridgewell/trace-mapping'
import { svelte2tsx } from 'svelte2tsx'
import * as ts from 'typescript'

import { termDescriptor, typeDescriptor } from './Descriptor'
import { ScipSymbol } from './ScipSymbol'
import { SourceInfo } from './SourceInfo'

export const svelteFileExtension: ts.FileExtensionInfo = {
  extension: '.svelte',
  isMixedContent: true,
  scriptKind: ts.ScriptKind.Deferred,
}

export function isSvelteFile(fileName: string): boolean {
  return fileName.endsWith('.svelte')
}

// This is the shim documented and used by svelte2tsx for Svelte 4 and 5,
// not a requirement to use Svelte 4. Resolve it from the same installed package
// as the transformer so their helper declarations stay in sync.
export function svelteShimPath(): string {
  return require.resolve('svelte2tsx/svelte-shims-v4.d.ts')
}

// Generated names are a transformer compatibility contract, not Svelte's
// public API. When upgrading svelte2tsx, verify the generated-declaration
// contract test AND the semantic Svelte snapshots before updating these rules.
export function sanitizeSvelteDocumentation(value: string): string {
  return value
    .replace(/\b__sveltets_\d+_IsomorphicComponent\b/g, 'Component')
    .replace(/\b([A-Za-z_$][\w$]*)__SvelteComponent_/g, '$1')
    .replace(/\$\$ComponentProps/g, 'Props')
}

export class SvelteSupport {
  private readonly moduleResolutionCache: ts.ModuleResolutionCache

  constructor(
    private readonly host: ts.CompilerHost,
    private readonly compilerOptions: ts.CompilerOptions,
    private readonly sourceInfos: Map<ts.SourceFile, SourceInfo>
  ) {
    this.moduleResolutionCache = ts.createModuleResolutionCache(
      host.getCurrentDirectory(),
      fileName => host.getCanonicalFileName(fileName),
      compilerOptions
    )
  }

  public fileExists(fileName: string): boolean {
    return this.host.fileExists(this.realFileName(fileName))
  }

  public readFile(fileName: string): string | undefined {
    return this.host.readFile(this.realFileName(fileName))
  }

  public realpath(fileName: string): string {
    const realFileName = this.realFileName(fileName)
    return this.host.realpath?.(realFileName) ?? realFileName
  }

  public getSourceFile(
    fileName: string,
    languageVersion: ts.ScriptTarget | ts.CreateSourceFileOptions,
    onError?: (message: string) => void,
    shouldCreateNewSourceFile?: boolean
  ): ts.SourceFile | undefined {
    if (!isSvelteFile(fileName)) {
      return this.host.getSourceFile(
        fileName,
        languageVersion,
        onError,
        shouldCreateNewSourceFile
      )
    }
    const text = this.host.readFile(fileName)
    if (text === undefined) {
      return undefined
    }

    const isTsFile = hasTypeScriptScript(text)
    let transformed: ReturnType<typeof svelte2tsx>
    try {
      transformed = svelte2tsx(text, {
        filename: fileName,
        isTsFile,
        emitOnTemplateError: true,
      })
    } catch (error) {
      const message = `failed to transform ${fileName}: ${
        error instanceof Error ? error.message : String(error)
      }`
      if (onError) {
        onError(message)
      } else {
        console.error(message)
      }
      const sourceFile = ts.createSourceFile(
        fileName,
        '',
        languageVersion,
        true,
        isTsFile ? ts.ScriptKind.TS : ts.ScriptKind.JS
      )
      this.sourceInfos.set(
        sourceFile,
        new SvelteSourceInfo(sourceFile, text, undefined)
      )
      return sourceFile
    }
    const sourceFile = ts.createSourceFile(
      fileName,
      transformed.code,
      languageVersion,
      true,
      isTsFile ? ts.ScriptKind.TS : ts.ScriptKind.JS
    )
    sourceFile.impliedNodeFormat = ts.getImpliedNodeFormatForFile(
      fileName,
      this.moduleResolutionCache,
      this.host,
      this.compilerOptions
    )
    this.sourceInfos.set(
      sourceFile,
      new SvelteSourceInfo(
        sourceFile,
        text,
        new TraceMap(transformed.map as SourceMapInput)
      )
    )
    return sourceFile
  }

  public resolveModuleNameLiterals(
    moduleLiterals: readonly ts.StringLiteralLike[],
    containingFile: string,
    redirectedReference: ts.ResolvedProjectReference | undefined,
    options: ts.CompilerOptions,
    containingSourceFile: ts.SourceFile
  ): readonly ts.ResolvedModuleWithFailedLookupLocations[] {
    return moduleLiterals.map(moduleLiteral => {
      const result = ts.resolveModuleName(
        moduleLiteral.text,
        containingFile,
        options,
        {
          fileExists: fileName => this.fileExists(fileName),
          readFile: fileName => this.readFile(fileName),
          realpath: fileName => this.realpath(fileName),
          directoryExists: directoryName =>
            this.host.directoryExists?.(directoryName) ?? false,
          getCurrentDirectory: () => this.host.getCurrentDirectory(),
          getDirectories: directoryName =>
            this.host.getDirectories?.(directoryName) ?? [],
          useCaseSensitiveFileNames: () =>
            this.host.useCaseSensitiveFileNames(),
        },
        this.moduleResolutionCache,
        redirectedReference,
        ts.getModeForUsageLocation(containingSourceFile, moduleLiteral, options)
      )
      const resolved = result.resolvedModule
      if (!resolved) {
        return result
      }
      const resolvedFileName = this.realFileName(resolved.resolvedFileName)
      if (!isSvelteFile(resolvedFileName)) {
        return result
      }
      const text = this.host.readFile(resolvedFileName) ?? ''
      return {
        ...result,
        resolvedModule: {
          ...resolved,
          resolvedFileName,
          extension: hasTypeScriptScript(text)
            ? ts.Extension.Ts
            : ts.Extension.Js,
        },
      }
    })
  }

  private realFileName(fileName: string): string {
    // A real `*.svelte.ts` file is a Svelte 5 rune module, not a virtual probe
    // for a sibling component with the same basename.
    if (this.host.fileExists(fileName)) {
      return fileName
    }
    const match = /^(.*?)(?:\.d)?\.svelte\.(?:ts|tsx|js|jsx)$/.exec(fileName)
    if (!match) {
      return fileName
    }
    const svelteFileName = `${match[1]}.svelte`
    return this.host.fileExists(svelteFileName) ? svelteFileName : fileName
  }
}

class SvelteSourceInfo implements SourceInfo {
  public readonly fileName: string
  public readonly language = 'Svelte'
  public readonly isSvelte = true
  private readonly lines: string[]
  private readonly storeDeclarations = new Map<ts.Node, ts.Node>()
  private readonly legacyPropRanges = new Map<ts.Node, number[]>()

  constructor(
    private readonly sourceFile: ts.SourceFile,
    public readonly originalText: string,
    private readonly sourceMap: TraceMap | undefined
  ) {
    this.fileName = sourceFile.fileName
    this.lines = originalText.split('\n')
    this.collectLegacyPropRanges()
    this.collectStoreDeclarations()
  }

  public range(node: ts.Node): number[] | undefined {
    if (node.getSourceFile() !== this.sourceFile) {
      return undefined
    }
    if (ts.isSourceFile(node)) {
      const endLine = this.lines.length - 1
      return toScipRange(0, 0, endLine, this.lines[endLine].length)
    }
    const legacyPropRange = this.legacyPropRanges.get(node)
    if (legacyPropRange) {
      return legacyPropRange
    }

    const start = this.originalPosition(node.getStart())
    if (!start) {
      return undefined
    }
    if (
      ts.isIdentifier(node) ||
      ts.isPrivateIdentifier(node) ||
      ts.isStringLiteralLike(node)
    ) {
      return this.rangeForName(node, start.line, start.column)
    }
    const generatedEnd = node.getEnd()
    if (generatedEnd <= node.getStart()) {
      return undefined
    }
    const lastCharacter = this.originalPosition(generatedEnd - 1)
    const startLine = this.lines[start.line]
    const lastLine = lastCharacter && this.lines[lastCharacter.line]
    if (
      !lastCharacter ||
      startLine === undefined ||
      lastLine === undefined ||
      start.column < 0 ||
      start.column > startLine.length ||
      lastCharacter.column < 0 ||
      lastCharacter.column >= lastLine.length ||
      start.source !== lastCharacter.source ||
      lastCharacter.line < start.line ||
      (lastCharacter.line === start.line && lastCharacter.column < start.column)
    ) {
      return undefined
    }
    return toScipRange(
      start.line,
      start.column,
      lastCharacter.line,
      lastCharacter.column + 1
    )
  }

  public declarationSymbol(
    node: ts.Node,
    symbolForNode: (node: ts.Node) => ScipSymbol
  ): ScipSymbol | undefined {
    // Map declarations introduced by svelte2tsx to symbols for the original
    // component, props, and stores instead of exposing generated helper symbols.
    const canonicalDeclaration = this.canonicalDeclaration(node)
    if (canonicalDeclaration !== node) {
      // Store auto-subscriptions resolve to the original store, while generic
      // parameters owned by the generated $$render resolve to the component.
      return symbolForNode(canonicalDeclaration)
    }
    if (this.isComponentPropsDeclaration(node)) {
      // Give generated inline component props a stable, cross-file identity so
      // component attributes navigate to their declaration in the .svelte file.
      return ScipSymbol.global(
        symbolForNode(this.sourceFile),
        typeDescriptor('Props')
      )
    }
    if (this.isComponentDeclaration(node)) {
      // The generated default export has no source range. Use the file symbol
      // so imports and component tags navigate to the component document.
      return symbolForNode(this.sourceFile)
    }
    if (
      ts.isPropertyAssignment(node) &&
      this.isComponentPropsDeclaration(node.parent)
    ) {
      // JavaScript-mode legacy components express props as generated object
      // properties rather than a type. Give them the same stable Props members.
      return ScipSymbol.global(
        symbolForNode(node.parent),
        termDescriptor(node.name.getText())
      )
    }
    return undefined
  }

  private isComponentDeclaration(node: ts.Node): boolean {
    if (node.getSourceFile() !== this.sourceFile) {
      return false
    }
    const name = declarationName(node)
    return name?.getText().endsWith('__SvelteComponent_') ?? false
  }

  private isComponentPropsDeclaration(node: ts.Node): boolean {
    if (node.getSourceFile() !== this.sourceFile) {
      return false
    }
    if (ts.isTypeAliasDeclaration(node)) {
      return node.name.text === '$$ComponentProps'
    }
    if (ts.isObjectLiteralExpression(node)) {
      const property = node.parent
      return (
        !!property &&
        ts.isPropertyAssignment(property) &&
        property.initializer === node &&
        isRenderPropsProperty(property)
      )
    }
    // TypeScript legacy components return `props: {...} as { ... }` from
    // $$render. Treat that generated type as the component-owned Props symbol.
    if (!ts.isTypeLiteralNode(node)) {
      return false
    }
    const asExpression = node.parent
    if (!asExpression || !ts.isAsExpression(asExpression)) {
      return false
    }
    const property = asExpression.parent
    if (!property || !ts.isPropertyAssignment(property)) {
      return false
    }
    return (
      asExpression.type === node &&
      property.initializer === asExpression &&
      isRenderPropsProperty(property)
    )
  }

  private canonicalDeclaration(node: ts.Node): ts.Node {
    if (ts.isFunctionDeclaration(node) && node.name?.text === '$$render') {
      return this.sourceFile
    }
    if (ts.isTypeLiteralNode(node) && ts.isTypeAliasDeclaration(node.parent)) {
      // A type alias already provides a stable owner. Keeping the generated
      // typeLiteral counter would make prop symbols vary between projects.
      return node.parent
    }
    return this.storeDeclarations.get(node) ?? node
  }

  private originalPosition(
    generatedOffset: number
  ): { source: string; line: number; column: number } | undefined {
    if (!this.sourceMap) {
      return undefined
    }
    const generated =
      this.sourceFile.getLineAndCharacterOfPosition(generatedOffset)
    const original = originalPositionFor(this.sourceMap, {
      line: generated.line + 1,
      column: generated.character,
    })
    if (
      original.source === null ||
      original.line === null ||
      original.column === null
    ) {
      return undefined
    }
    return {
      source: original.source,
      line: original.line - 1,
      column: original.column,
    }
  }

  private rangeForName(
    node: ts.Identifier | ts.PrivateIdentifier | ts.StringLiteralLike,
    line: number,
    column: number
  ): number[] | undefined {
    const lineText = this.lines[line]
    if (lineText === undefined || column < 0 || column > lineText.length) {
      return undefined
    }
    const candidates = ts.isStringLiteralLike(node)
      ? [node.text, node.getText()]
      : [node.getText()]
    for (const candidate of candidates) {
      if (lineText.slice(column, column + candidate.length) === candidate) {
        return [line, column, column + candidate.length]
      }
    }
    return undefined
  }

  private collectStoreDeclarations(): void {
    const declarations = new Map<string, ts.Node>()
    const generatedStores: ts.VariableDeclaration[] = []
    const visit = (node: ts.Node): void => {
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
        if (node.name.text.startsWith('$') && !this.range(node.name)) {
          generatedStores.push(node)
        } else if (this.range(node.name)) {
          declarations.set(node.name.text, node)
        }
      } else if (
        (ts.isImportSpecifier(node) || ts.isNamespaceImport(node)) &&
        this.range(node.name)
      ) {
        declarations.set(node.name.text, node)
      } else if (
        ts.isImportClause(node) &&
        node.name &&
        this.range(node.name)
      ) {
        declarations.set(node.name.text, node)
      }
      ts.forEachChild(node, visit)
    }
    visit(this.sourceFile)
    for (const store of generatedStores) {
      const declaration = declarations.get(store.name.getText().slice(1))
      if (declaration) {
        this.storeDeclarations.set(store, declaration)
      }
    }
  }

  private collectLegacyPropRanges(): void {
    // svelte2tsx does not source-map names in its generated legacy props type.
    // Reuse the corresponding top-level $$render variable range so the Props
    // member gets a definition on the original `export let` declaration.
    const declarations = new Map<string, number[]>()
    const visit = (node: ts.Node): void => {
      if (
        ts.isVariableDeclaration(node) &&
        ts.isIdentifier(node.name) &&
        ts.isVariableDeclarationList(node.parent) &&
        ts.isVariableStatement(node.parent.parent) &&
        ts.isBlock(node.parent.parent.parent) &&
        ts.isFunctionDeclaration(node.parent.parent.parent.parent) &&
        node.parent.parent.parent.parent.name?.text === '$$render'
      ) {
        const range = this.range(node.name)
        if (range) {
          declarations.set(node.name.text, range)
        }
      } else if (
        ts.isTypeLiteralNode(node) &&
        this.isComponentPropsDeclaration(node)
      ) {
        for (const member of node.members) {
          if (ts.isPropertySignature(member) && member.name) {
            const range = declarations.get(member.name.getText())
            if (range) {
              this.legacyPropRanges.set(member.name, range)
            }
          }
        }
      } else if (
        ts.isObjectLiteralExpression(node) &&
        this.isComponentPropsDeclaration(node)
      ) {
        for (const property of node.properties) {
          if (ts.isPropertyAssignment(property)) {
            const range = declarations.get(property.name.getText())
            if (range) {
              this.legacyPropRanges.set(property.name, range)
            }
          }
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(this.sourceFile)
  }
}

function isRenderPropsProperty(property: ts.PropertyAssignment): boolean {
  if (property.name.getText() !== 'props') {
    return false
  }
  const object = property.parent
  const returnStatement = object?.parent
  const block = returnStatement?.parent
  const render = block?.parent
  return (
    ts.isObjectLiteralExpression(object) &&
    ts.isReturnStatement(returnStatement) &&
    ts.isBlock(block) &&
    ts.isFunctionDeclaration(render) &&
    render.name?.text === '$$render'
  )
}

function hasTypeScriptScript(text: string): boolean {
  return /<script\b[^>]*\blang\s*=\s*(?:["'](?:ts|typescript)["']|(?:ts|typescript)\b)/i.test(
    text
  )
}

function declarationName(node: ts.Node): ts.DeclarationName | undefined {
  if (
    ts.isVariableDeclaration(node) ||
    ts.isTypeAliasDeclaration(node) ||
    ts.isClassDeclaration(node) ||
    ts.isInterfaceDeclaration(node)
  ) {
    return node.name
  }
  return undefined
}

function toScipRange(
  startLine: number,
  startColumn: number,
  endLine: number,
  endColumn: number
): number[] {
  return startLine === endLine
    ? [startLine, startColumn, endColumn]
    : [startLine, startColumn, endLine, endColumn]
}
