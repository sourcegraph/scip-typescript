import * as path from 'path'

import * as ts from 'typescript'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { escapeLoneSurrogates, FileIndexer } from './FileIndexer'
import { Input } from './Input'
import { Packages } from './Packages'
import { scip } from './scip'
import { ScipSymbol } from './ScipSymbol'

test('local prototype owners stay out of the global symbol table', () => {
  const cwd = path.resolve('snapshots/input/prototype-members')
  const fileName = path.join(cwd, 'src/connection.mjs')
  const program = ts.createProgram([fileName], {
    allowJs: true,
    noEmit: true,
    target: ts.ScriptTarget.ES2022,
  })
  const sourceFile = program.getSourceFile(fileName)!
  const globalSymbols = new Map<ts.Node, ScipSymbol>()
  const document = new scip.Document()
  new FileIndexer(
    program.getTypeChecker(),
    {
      cwd,
      projectRoot: cwd,
      projectDisplayName: 'prototype-members',
      output: '',
      inferTsconfig: false,
      progressBar: false,
      yarnWorkspaces: false,
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: false,
      globalCaches: true,
      indexedProjects: new Set(),
      writeIndex: () => {},
    },
    Input.fromFile(fileName),
    document,
    globalSymbols,
    new Map(),
    new Packages(cwd),
    sourceFile
  ).index()

  assert.ok(
    document.occurrences.some(
      occurrence =>
        occurrence.symbol.startsWith('local ') &&
        (occurrence.symbol_roles & scip.SymbolRole.Definition) !== 0
    ),
    'the fixture must exercise local definitions'
  )
  assert.ok(globalSymbols.size > 0)
  assert.equal(
    [...globalSymbols]
      .filter(([, symbol]) => symbol.isLocal())
      .map(([node]) => node.getText()),
    []
  )
})

test('documentation preserves valid Unicode and existing escapes', () => {
  const text = 'ASCII café 中文 😀 \\ud800'
  assert.is(escapeLoneSurrogates(text), text)
})

test('documentation escapes unpaired UTF-16 code units', () => {
  assert.is(escapeLoneSurrogates('\ud800'), '\\ud800')
  assert.is(escapeLoneSurrogates('\udfff'), '\\udfff')
  assert.is(escapeLoneSurrogates('a\ud83cx\udfffb'), 'a\\ud83cx\\udfffb')
  assert.is(
    escapeLoneSurrogates('\ud800\ud800\udc00\udc00'),
    '\\ud800\ud800\udc00\\udc00'
  )
})

test.run()
