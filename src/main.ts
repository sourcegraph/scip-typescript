import * as child_process from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import * as ts from 'typescript'
import * as yargs from 'yargs'
import * as lsif from './lsif'
import { Indexer } from './Indexer'

export const lsif_typed = lsif.lib.codeintel.lsif_typed

export interface DocEntry {
  name?: string
  fileName?: string
  documentation?: string
  type?: string
  constructors?: DocEntry[]
  parameters?: DocEntry[]
  returnType?: string
}

export interface Options {
  projectRoot: string
  project: string
  writeIndex: (index: lsif.lib.codeintel.lsif_typed.Index) => void
}

export function main(): void {
  // tslint:disable-next-line: no-unused-expression
  yargs
    .scriptName('lsif-node')
    .usage('$0 <cmd> [args]')
    .command(
      'index [project]',
      'LSIF index a project',
      yargs => {
        yargs.positional('project', {
          type: 'string',
          default: '.',
          describe: 'the directory to index',
        })
        yargs.option('useYarnWorkspaces', {
          type: 'boolean',
          default: 'false',
          describe: 'whether to index all yarn workspaces',
        })
        yargs.option('output', {
          type: 'string',
          default: 'dump.lsif-typed',
          describe: 'path to the output file',
        })
      },
      argv => {
        const dir = argv.project as string
        const projects: string[] = argv.useYarnWorkspaces
          ? yarnWorkspaces(dir)
          : [dir]
        const output = fs.openSync(argv.output as string, 'w')
        try {
          // NOTE: we may want index these projects in parallel in the future.
          // We need to be careful about which order we index the projects because
          // they can have dependencies.
          for (const project of projects) {
            index({
              projectRoot: dir,
              project,
              writeIndex: (index): void => {
                fs.writeSync(output, index.serializeBinary())
              },
            })
          }
        } finally {
          fs.close(output)
        }
      }
    )
    .help().argv
}

function yarnWorkspaces(dir: string): string[] {
  const json = JSON.parse(
    JSON.parse(
      child_process.execSync('yarn --silent --json workspaces info', {
        cwd: dir,
        encoding: 'utf-8',
      })
    ).data
  )

  const result: string[] = []
  for (const key of Object.keys(json)) {
    const location = 'location'
    if (json[key][location] !== undefined) {
      result.push(json[key][location])
    }
  }
  return result
}

export function indexToOutputFile(project: string, output: string): void {
  throw new Error('NOT IMPLEMENTED YET')
}

export function index(options: Options): void {
  console.log({ options })
  // console.log("\n==========");
  // console.log({ project: argv.project, args: ts.sys.args });
  let config = ts.parseCommandLine(
    ['-p', options.project],
    // tslint:disable-next-line: arrow-return-shorthand
    (relativePath: string) => {
      // console.log({ relativePath })
      return path.resolve(options.project, relativePath)
    }
  )
  let tsconfigFileName: string | undefined
  if (config.options.project) {
    const projectPath = path.resolve(config.options.project)
    if (ts.sys.directoryExists(projectPath)) {
      tsconfigFileName = path.join(projectPath, 'tsconfig.json')
    } else {
      tsconfigFileName = projectPath
    }
    if (!ts.sys.fileExists(tsconfigFileName)) {
      console.error(
        `skipping project '${options.project}' because it's missing tsconfig.json (expected at ${tsconfigFileName})`
      )
      return
    }
    config = loadConfigFile(tsconfigFileName)
  }

  // console.log({ tsconfigFileName })

  if (config.fileNames.length === 0) {
    console.error(`no input files`)
    process.exitCode = 1
  }

  new Indexer(config, options).index()
}

if (require.main === module) {
  main()
}

function loadConfigFile(file: string): ts.ParsedCommandLine {
  const absolute = path.resolve(file)

  const readResult = ts.readConfigFile(absolute, path => ts.sys.readFile(path))
  if (readResult.error) {
    throw new Error(
      ts.formatDiagnostics([readResult.error], ts.createCompilerHost({}))
    )
  }
  const config = readResult.config
  if (config.compilerOptions !== undefined) {
    config.compilerOptions = {
      ...config.compilerOptions,
      ...defaultCompilerOptions(file),
    }
  }
  const result = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    path.dirname(absolute)
  )
  if (result.errors.length > 0) {
    throw new Error(
      ts.formatDiagnostics(result.errors, ts.createCompilerHost({}))
    )
  }
  return result
}

function defaultCompilerOptions(configFileName?: string): ts.CompilerOptions {
  const options: ts.CompilerOptions =
    configFileName && path.basename(configFileName) === 'jsconfig.json'
      ? {
          allowJs: true,
          maxNodeModuleJsDepth: 2,
          allowSyntheticDefaultImports: true,
          skipLibCheck: true,
          noEmit: true,
        }
      : {}
  return options
}
