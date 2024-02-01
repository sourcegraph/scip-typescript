import { Command } from 'commander'
import ts from 'typescript'

import packageJson from '../package.json'

import { parseHumanByteSizeIntoNumber } from './parseHumanByteSizeIntoNumber'
import * as scip from './scip'

/** Configuration options to index a multi-project workspace. */
export interface MultiProjectOptions {
  inferTsconfig: boolean
  progressBar: boolean
  yarnWorkspaces: boolean
  yarnBerryWorkspaces: boolean
  pnpmWorkspaces: boolean
  globalCaches: boolean
  emitSignatures: boolean
  followSourceMapping: boolean
  emitExternalSymbols: boolean
  maxFileByteSize?: string
  maxFileByteSizeNumber?: number
  cwd: string
  output: string
  indexedProjects: Set<string>
}

/** Configuration options to index a single TypeScript project. */
export interface ProjectOptions extends MultiProjectOptions {
  projectRoot: string
  projectDisplayName: string
  writeIndex: (index: scip.scip.Index) => void
}

/** Cached values */
export interface GlobalCache {
  sources: Map<
    string,
    [ts.SourceFile | undefined, ts.ScriptTarget | ts.CreateSourceFileOptions]
  >
  parsedCommandLines: Map<string, ts.ParsedCommandLine>
  externalSymbols: Map<string, scip.scip.SymbolInformation>
}

export function mainCommand(
  indexAction: (projects: string[], options: MultiProjectOptions) => void
): Command {
  const command = new Command()
  command
    .name('scip-typescript')
    .version(packageJson.version)
    .description(
      'SCIP indexer for TypeScript and JavaScript\nFor usage examples, see https://github.com/sourcegraph/scip-typescript/blob/main/README.md'
    )
  command
    .command('index')
    .option('--cwd <path>', 'the working directory', process.cwd())
    .option('--pnpm-workspaces', 'whether to index all pnpm workspaces', false)
    .option('--yarn-workspaces', 'whether to index all yarn workspaces', false)
    .option(
      '--yarn-berry-workspaces',
      '(deprecated) use --yarn-workspaces instead',
      false
    )
    .option(
      '--infer-tsconfig',
      "whether to infer the tsconfig.json file, if it's missing",
      false
    )
    .option('--output <path>', 'path to the output file', 'index.scip')
    .option('--progress-bar', 'whether to enable a rich progress bar')
    .option('--no-progress-bar', 'whether to disable the rich progress bar')
    .option(
      '--no-global-caches',
      'whether to disable global caches between TypeScript projects'
    )
    .option(
      '--emit-signatures',
      'whether to emit experimental `SymbolInformation.signatures`',
      false
    )
    .option(
      '--emit-external-symbols',
      'whether to emit `SymbolInformation` for external symbols (defined outside this project)',
      false
    )
    .option(
      '--follow-source-mapping',
      'if true, follow `sourceMappingURL` in declaration files. ' +
        'In multi-project workspaces, this option allows more accurate ' +
        'cross-project navigation.',
      true
    )
    .option(
      '--max-file-byte-size <value>',
      'skip files that have a larger byte size than the provided value. Supported formats: 1kb, 1mb, 1gb.',
      '1mb'
    )
    .argument('[projects...]')
    .action((parsedProjects, parsedOptions) => {
      const options = parsedOptions as MultiProjectOptions

      // Parse and validate human-provided --max-file-byte-size value
      options.maxFileByteSizeNumber = parseHumanByteSizeIntoNumber(
        options.maxFileByteSize ?? '1mb'
      )
      if (isNaN(options.maxFileByteSizeNumber)) {
        console.error(
          `invalid byte size '${options.maxFileByteSize}'. To fix this problem, change the value of the flag --max-file-byte-size to use a valid byte size format: 1kb, 1mb, 1gb.`
        )
        process.exitCode = 1
        return
      }

      indexAction(parsedProjects as string[], options)
    })
  return command
}
