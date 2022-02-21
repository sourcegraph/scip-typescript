import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

import * as ts from 'typescript'
import * as yargs from 'yargs'

import { Indexer } from './Indexer'
import * as lsif from './lsif'

export const lsif_typed = lsif.lib.codeintel.lsif_typed

export interface Options {
  projectRoot: string
  project: string
  writeIndex: (index: lsif.lib.codeintel.lsif_typed.Index) => void
}

export function main(): void {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises, no-unused-expressions
  yargs
    .scriptName('lsif-typescript')
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
        const directory = argv.project as string
        const projects: string[] = argv.useYarnWorkspaces
          ? yarnWorkspaces(directory)
          : [directory]
        // eslint-disable-next-line no-sync
        const output = fs.openSync(argv.output as string, 'w')
        try {
          // NOTE: we may want index these projects in parallel in the future.
          // We need to be careful about which order we index the projects because
          // they can have dependencies.
          for (const project of projects) {
            index({
              projectRoot: directory,
              project,
              writeIndex: (index): void => {
                // eslint-disable-next-line no-sync
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

function yarnWorkspaces(directory: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const json = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    JSON.parse(
      // eslint-disable-next-line no-sync
      child_process.execSync('yarn --silent --json workspaces info', {
        cwd: directory,
        encoding: 'utf-8',
      })
    ).data
  )

  const result: string[] = []
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  for (const key of Object.keys(json)) {
    const location = 'location'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (json[key][location] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      result.push(json[key][location])
    }
  }
  return result
}

export function index(options: Options): void {
  let config = ts.parseCommandLine(
    ['-p', options.project],
    (relativePath: string) => path.resolve(options.project, relativePath)
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

  if (config.fileNames.length === 0) {
    console.error('no input files')
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const config = readResult.config
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (config.compilerOptions !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    config.compilerOptions = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
