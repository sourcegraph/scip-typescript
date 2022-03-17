#!/usr/bin/env node
import * as child_process from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { cwd } from 'process'

import * as ts from 'typescript'
import * as yargs from 'yargs'

import packageJson from '../package.json'

import * as lsif from './lsif'
import { ProjectIndexer } from './ProjectIndexer'

export const lsiftyped = lsif.lib.codeintel.lsiftyped

export interface Options {
  /**
   * The directory where to generate the dump.lsif-typed file.
   *
   * All `Document.relative_path` fields will be relative paths to this directory.
   */
  workspaceRoot: string

  /** The directory containing a tsconfig.json file. */
  projectRoot: string

  /** The display name of the project. */
  projectDisplayName: string

  /** Whether to infer the tsconfig.json file, if it's missing. */
  inferTSConfig: boolean

  /** If truthy, disables the progress bar. */
  noProgressBar?: boolean

  /**
   * Callback to consume the generated LSIF Typed payload in a streaming fashion.
   */
  writeIndex: (index: lsif.lib.codeintel.lsiftyped.Index) => void
}

export function main(): void {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises, no-unused-expressions
  yargs
    .scriptName('lsif-typescript')
    .usage('$0 <cmd> [args]')
    .version(packageJson.version)
    .command(
      'index [project]',
      'LSIF index a project',
      yargs => {
        yargs.positional('project', {
          type: 'string',
          default: '.',
          describe:
            'path to the TypeScript project to index. Normally, this directory contains a tsconfig.json file.',
        })
        yargs.option('yarnWorkspaces', {
          type: 'boolean',
          default: 'false',
          describe: 'whether to index all yarn workspaces',
        })
        yargs.option('inferTSConfig', {
          type: 'boolean',
          default: 'false',
          describe: "Whether to infer the tsconfig.json file, if it's missing",
        })
        yargs.option('output', {
          type: 'string',
          default: 'dump.lsif-typed',
          describe: 'path to the output file',
        })
        yargs.option('noProgressBar', {
          type: 'boolean',
          default: `${!process.stderr.isTTY}`,
          describe: 'disable the progress bar',
        })
      },
      argv => {
        const workspaceRoot = argv.project as string
        const inferTSConfig =
          typeof argv.inferTSConfig === 'boolean' && argv.inferTSConfig
        const yarnWorkspaces =
          typeof argv.yarnWorkspaces === 'boolean' && argv.yarnWorkspaces
        const projects: string[] = yarnWorkspaces
          ? listYarnWorkspaces(workspaceRoot)
          : [workspaceRoot]
        let outputPath = argv.output as string
        if (!path.isAbsolute(outputPath)) {
          outputPath = path.resolve(cwd(), outputPath)
        }
        const output = fs.openSync(outputPath, 'w')
        try {
          // NOTE: we may want index these projects in parallel in the future.
          // We need to be careful about which order we index the projects because
          // they can have dependencies.
          for (const projectRoot of projects) {
            const projectDisplayName = projectRoot === '.' ? cwd() : projectRoot
            index({
              workspaceRoot,
              projectRoot,
              projectDisplayName,
              inferTSConfig,
              noProgressBar: argv.noProgressBar === true,
              writeIndex: (index): void => {
                fs.writeSync(output, index.serializeBinary())
              },
            })
          }
        } finally {
          fs.close(output)
          console.log(`done ${outputPath}`)
        }
      }
    )
    .help().argv
}

export function listYarnWorkspaces(directory: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const json = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    JSON.parse(
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
      result.push(path.join(directory, json[key][location]))
    }
  }
  return result
}

export function index(options: Options): void {
  let config = ts.parseCommandLine(
    ['-p', options.projectRoot],
    (relativePath: string) => path.resolve(options.projectRoot, relativePath)
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
      if (options.inferTSConfig) {
        fs.writeFileSync(tsconfigFileName, '{}')
      } else {
        console.error(`- ${options.projectDisplayName} (missing tsconfig.json)`)
        return
      }
    }
    config = loadConfigFile(tsconfigFileName)
  }

  if (config.fileNames.length === 0) {
    console.error('no input files')
    process.exitCode = 1
    return
  }

  new ProjectIndexer(config, options).index()
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
  const basePath = path.dirname(absolute)
  const result = ts.parseJsonConfigFileContent(config, ts.sys, basePath)
  if (result.errors.length > 0) {
    throw new Error(
      ts.formatDiagnostics(result.errors, ts.createCompilerHost({}))
    )
  }
  return result
}

function defaultCompilerOptions(configFileName?: string): ts.CompilerOptions {
  const options: ts.CompilerOptions =
    // Not a typo, jsconfig.json is a thing https://sourcegraph.com/search?q=context:global+file:jsconfig.json&patternType=literal
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
