import { Command } from 'commander'

import packageJson from '../package.json'

import * as lsif from './lsif'

/** Configuration options to index a multi-project workspace. */
export interface MultiProjectOptions {
  inferTsconfig: boolean
  progressBar: boolean
  yarnWorkspaces: boolean
  cwd: string
  output: string
  indexedProjects: Set<string>
}

/** Configuration options to index a single TypeScript project. */
export interface ProjectOptions extends MultiProjectOptions {
  projectRoot: string
  projectDisplayName: string
  writeIndex: (index: lsif.lib.codeintel.lsiftyped.Index) => void
}

export function commanderCommand(
  indexAction: (projects: string[], otpions: MultiProjectOptions) => void
): Command {
  const command = new Command()
  command
    .name('lsif-typescript')
    .version(packageJson.version)
    .description('LSIF indexer for TypeScript and JavaScript')
  command
    .command('index')
    .option('--cwd', 'the working directory', process.cwd())
    .option('--yarn-workspaces', 'whether to index all yarn workspaces', false)
    .option(
      '--infer-tsconfig',
      "whether to infer the tsconfig.json file, if it's missing",
      false
    )
    .option('--output', 'path to the output file', 'dump.lsif-typed')
    .option('--no-progress-bar', 'whether to disable the progress bar')
    .argument('[projects...]')
    .action((parsedProjects, parsedOptions) => {
      indexAction(
        parsedProjects as string[],
        parsedOptions as MultiProjectOptions
      )
    })
  return command
}
