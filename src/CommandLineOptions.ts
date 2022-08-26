import { Command } from 'commander'

import packageJson from '../package.json'

import * as lsif from './lsif'

/** Configuration options to index a multi-project workspace. */
export interface MultiProjectOptions {
  inferTsconfig: boolean
  progressBar: boolean
  yarnWorkspaces: boolean
  yarnBerryWorkspaces: boolean
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

export function mainCommand(
  indexAction: (projects: string[], otpions: MultiProjectOptions) => void
): Command {
  const command = new Command()
  command
    .name('scip-typescript')
    .version(packageJson.version)
    .description(
      'LSIF indexer for TypeScript and JavaScript\nFor usage examples, see https://github.com/sourcegraph/scip-typescript/blob/main/README.md'
    )
  command
    .command('index')
    .option('--cwd <path>', 'the working directory', process.cwd())
    .option('--yarn-workspaces', 'whether to index all yarn workspaces', false)
    .option(
      '--yarn-berry-workspaces',
      'whether to index all yarn v3 workspaces',
      false
    )
    .option(
      '--infer-tsconfig',
      "whether to infer the tsconfig.json file, if it's missing",
      false
    )
    .option('--output <path>', 'path to the output file', 'index.scip')
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
