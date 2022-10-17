import * as path from 'path'

import prettyMilliseconds from 'pretty-ms'
import ProgressBar from 'progress'
import * as ts from 'typescript'

import { GlobalCache, ProjectOptions } from './CommandLineOptions'
import { FileIndexer } from './FileIndexer'
import { Input } from './Input'
import * as lsif from './lsif'
import { LsifSymbol } from './LsifSymbol'
import { Packages } from './Packages'

function createCompilerHost(
  cache: GlobalCache,
  compilerOptions: ts.CompilerOptions,
  projectOptions: ProjectOptions
): ts.CompilerHost {
  const host = ts.createCompilerHost(compilerOptions)
  if (!projectOptions.globalCaches) {
    return host
  }
  const hostCopy = { ...host }
  host.getParsedCommandLine = (fileName: string) => {
    if (!hostCopy.getParsedCommandLine) {
      return undefined
    }
    if (cache.parsedCommandLines.has(fileName)) {
      return cache.parsedCommandLines.get(fileName)
    }
    const result = hostCopy.getParsedCommandLine(fileName)
    if (result !== undefined) {
      cache.parsedCommandLines.set(fileName, result)
    }
    return result
  }
  host.getSourceFile = (fileName, languageVersion) => {
    const fromCache = cache.sources.get(fileName)
    if (fromCache !== undefined) {
      return fromCache
    }
    const result = hostCopy.getSourceFile(fileName, languageVersion)
    if (result !== undefined) {
      cache.sources.set(fileName, result)
    }
    return result
  }
  return host
}

export class ProjectIndexer {
  private options: ProjectOptions
  private program: ts.Program
  private checker: ts.TypeChecker
  private symbolCache: Map<ts.Node, LsifSymbol> = new Map()
  private packages: Packages
  constructor(
    public readonly config: ts.ParsedCommandLine,
    options: ProjectOptions,
    cache: GlobalCache
  ) {
    this.options = options
    const host = createCompilerHost(cache, config.options, options)
    this.program = ts.createProgram(config.fileNames, config.options, host)
    this.checker = this.program.getTypeChecker()
    this.packages = new Packages(options.projectRoot)
  }
  public index(): void {
    const startTimestamp = Date.now()
    const sourceFiles = this.program.getSourceFiles()

    const filesToIndex: ts.SourceFile[] = []
    // Visit every sourceFile in the program
    for (const sourceFile of sourceFiles) {
      const includes = this.config.fileNames.includes(sourceFile.fileName)
      if (!includes) {
        continue
      }
      filesToIndex.push(sourceFile)
    }

    if (filesToIndex.length === 0) {
      throw new Error(
        `no indexable files in project '${this.options.projectDisplayName}'`
      )
    }

    const jobs: ProgressBar | undefined = !this.options.progressBar
      ? undefined
      : new ProgressBar(
          `  ${this.options.projectDisplayName} [:bar] :current/:total :title`,
          {
            total: filesToIndex.length,
            renderThrottle: 100,
            incomplete: '_',
            complete: '#',
            width: 20,
            clear: true,
            stream: process.stderr,
          }
        )
    let lastWrite = startTimestamp
    for (const [index, sourceFile] of filesToIndex.entries()) {
      const title = path.relative(this.options.cwd, sourceFile.fileName)
      jobs?.tick({ title })
      if (!this.options.progressBar) {
        const now = Date.now()
        const elapsed = now - lastWrite
        if (elapsed > 1000 && index > 2) {
          lastWrite = now
          process.stdout.write('.')
        }
      }
      const document = new lsif.lib.codeintel.lsiftyped.Document({
        relative_path: path.relative(this.options.cwd, sourceFile.fileName),
        occurrences: [],
      })
      const input = new Input(sourceFile.fileName, sourceFile.getText())
      const visitor = new FileIndexer(
        this.checker,
        input,
        document,
        this.symbolCache,
        this.packages,
        sourceFile
      )
      try {
        visitor.index()
      } catch (error) {
        console.error(
          `unexpected error indexing project root '${this.options.cwd}'`,
          error
        )
      }
      if (visitor.document.occurrences.length > 0) {
        this.options.writeIndex(
          new lsif.lib.codeintel.lsiftyped.Index({
            documents: [visitor.document],
          })
        )
      }
    }
    jobs?.terminate()
    const elapsed = Date.now() - startTimestamp
    if (!this.options.progressBar && lastWrite > startTimestamp) {
      process.stdout.write('\n')
    }
    console.log(
      `+ ${this.options.projectDisplayName} (${prettyMilliseconds(elapsed)})`
    )
  }
}
