import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

import * as ts from 'typescript'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { GlobalCache, ProjectOptions } from './CommandLineOptions'
import {
  deduplicateOccurrences,
  languageForFileName,
  prettyMilliseconds,
  ProjectIndexer,
} from './ProjectIndexer'
import * as scip from './scip'

function minute(x: number): number {
  return x * 60 * 1000
}
function second(x: number): number {
  return x * 1000
}

test('prettyMilliseconds', () => {
  assert.is(prettyMilliseconds(0), '0ms')
  assert.is(prettyMilliseconds(1), '1ms')
  assert.is(prettyMilliseconds(second(1)), '1s 0ms')
  assert.is(prettyMilliseconds(second(1) + 300), '1s 300ms')
  assert.is(prettyMilliseconds(second(2)), '2s 0ms')
  assert.is(prettyMilliseconds(second(5)), '5s 0ms')
  assert.is(prettyMilliseconds(minute(1)), '1m 0s 0ms')
  assert.is(prettyMilliseconds(minute(2)), '2m 0s 0ms')
  assert.is(prettyMilliseconds(minute(5)), '5m 0s 0ms')
  assert.is(prettyMilliseconds(minute(60)), '60m 0s 0ms')
  assert.is(prettyMilliseconds(minute(5) + second(8) + 999), '5m 8s 999ms')
})

test('languageForFileName', () => {
  assert.is(languageForFileName('index.ts'), 'TypeScript')
  assert.is(languageForFileName('index.mts'), 'TypeScript')
  assert.is(languageForFileName('index.cts'), 'TypeScript')
  assert.is(languageForFileName('index.tsx'), 'TypeScriptReact')
  assert.is(languageForFileName('index.js'), 'JavaScript')
  assert.is(languageForFileName('index.mjs'), 'JavaScript')
  assert.is(languageForFileName('index.cjs'), 'JavaScript')
  assert.is(languageForFileName('index.jsx'), 'JavaScriptReact')
  assert.is(languageForFileName('package.json'), 'JSON')
  assert.is(languageForFileName('Component.svelte'), undefined)
})

test('only deduplicates documents after successful emission', () => {
  const projectRoot = fs.mkdtempSync(
    path.join(os.tmpdir(), 'scip-typescript-project-')
  )
  try {
    const fileName = path.join(projectRoot, 'index.ts')
    fs.writeFileSync(fileName, 'export const value = 1\n')
    const cache: GlobalCache = {
      sources: new Map(),
      parsedCommandLines: new Map(),
      indexedFiles: new Set(),
      sourceInfos: new Map(),
    }
    const options: ProjectOptions = {
      cwd: projectRoot,
      projectRoot,
      projectDisplayName: projectRoot,
      output: path.join(projectRoot, 'index.scip'),
      inferTsconfig: false,
      progressBar: false,
      yarnWorkspaces: false,
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: false,
      globalCaches: false,
      indexedProjects: new Set(),
      writeIndex: () => {
        throw new Error('emission failed')
      },
    }
    const config: ts.ParsedCommandLine = {
      options: {},
      fileNames: [fileName],
      errors: [],
    }

    assert.throws(
      () => new ProjectIndexer(config, options, cache).index(),
      /emission failed/
    )
    assert.not.ok(cache.indexedFiles.has(fileName))
  } finally {
    fs.rmSync(projectRoot, { recursive: true })
  }
})

test('Svelte occurrence deduplication preserves definition metadata', () => {
  const reference = new scip.scip.Occurrence({
    range: [1, 2, 3],
    symbol: 'local 0',
  })
  const definition = new scip.scip.Occurrence({
    range: [1, 2, 3],
    enclosing_range: [1, 0, 5, 0],
    symbol: 'local 0',
    symbol_roles: scip.scip.SymbolRole.Definition,
    diagnostics: [
      new scip.scip.Diagnostic({ message: 'definition diagnostic' }),
    ],
  })
  const document = new scip.scip.Document({
    occurrences: [reference, definition],
  })

  deduplicateOccurrences(document)

  assert.is(document.occurrences.length, 1)
  assert.is(document.occurrences[0], definition)
  assert.equal(document.occurrences[0].enclosing_range, [1, 0, 5, 0])
  assert.is(
    document.occurrences[0].diagnostics[0].message,
    'definition diagnostic'
  )
})

test.run()
