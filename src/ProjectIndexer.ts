import * as path from 'path'
import { Writable as WritableStream } from 'stream'

import prettyMilliseconds from 'pretty-ms'
import ProgressBar from 'progress'
import * as ts from 'typescript'

import { ProjectOptions } from './CommandLineOptions'
import { FileIndexer } from './FileIndexer'
import { Input } from './Input'
import * as lsif from './lsif'
import { LsifSymbol } from './LsifSymbol'
import { Packages } from './Packages'

export class ProjectIndexer {
  private options: ProjectOptions
  private program: ts.Program
  private checker: ts.TypeChecker
  private symbolCache: Map<ts.Node, LsifSymbol> = new Map()
  private packages: Packages
  constructor(
    public readonly config: ts.ParsedCommandLine,
    options: ProjectOptions
  ) {
    this.options = options
    this.program = ts.createProgram(config.fileNames, config.options)
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

    const jobs = new ProgressBar(
      `  ${this.options.projectDisplayName} [:bar] :current/:total :title`,
      {
        total: filesToIndex.length,
        renderThrottle: 100,
        incomplete: '_',
        complete: '#',
        width: 20,
        clear: true,
        stream: this.options.progressBar
          ? process.stderr
          : writableNoopStream(),
      }
    )
    let lastWrite = startTimestamp
    for (const [index, sourceFile] of filesToIndex.entries()) {
      const title = path.relative(this.options.cwd, sourceFile.fileName)
      jobs.tick({ title })
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
    jobs.terminate()
    const elapsed = Date.now() - startTimestamp
    if (!this.options.progressBar && lastWrite > startTimestamp) {
      process.stdout.write('\n')
    }
    console.log(
      `+ ${this.options.projectDisplayName} (${prettyMilliseconds(elapsed)})`
    )
  }
}

function writableNoopStream(): WritableStream {
  return new WritableStream({
    write(_unused1, _unused2, callback) {
      setImmediate(callback)
    },
  })
}
