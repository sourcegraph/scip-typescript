import * as path from 'path'

import * as ts from 'typescript'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { FileIndexer } from './FileIndexer'
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

test('lone surrogates in documentation and symbols survive serialization', () => {
  const cwd = path.resolve('snapshots/input/syntax')
  const fileName = path.join(cwd, 'src/surrogates.ts')
  const program = ts.createProgram([fileName], {
    noEmit: true,
    target: ts.ScriptTarget.ES2022,
  })
  const sourceFile = program.getSourceFile(fileName)!
  sourceFile.moduleName = 'module-\ud800'
  const document = new scip.Document()
  new FileIndexer(
    program.getTypeChecker(),
    {
      cwd,
      projectRoot: cwd,
      projectDisplayName: 'syntax',
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
    new Map(),
    new Map(),
    new Packages(cwd),
    sourceFile
  ).index()

  const index = new scip.Index({ documents: [document] })
  const decoded = scip.Index.deserializeBinary(index.serializeBinary())
    .documents[0]
  assert.equal(decoded.toObject(), document.toObject())
  assert.equal(decoded.symbols[0].documentation, [
    '```ts\nmodule "module-�"\n```',
  ])

  const signatures = [
    'var high: "�"',
    'var low: "�"',
    'var pair: "😀"',
    'var mixed: "�😀�"',
    'var adjacent: "�𐀀�"',
    'var unicode: "ASCII café 中文 😀"',
    'var escaped: "\\\\ud800"',
  ]
  for (const signature of signatures) {
    assert.ok(
      decoded.symbols.some(info =>
        info.documentation.includes('```ts\n' + signature + '\n```')
      ),
      `missing signature: ${signature}`
    )
  }

  for (const name of ['�', 'low�', '😀', '\\ud800']) {
    const suffix = '/C().`' + name + '`.'
    const info = decoded.symbols.find(info => info.symbol.endsWith(suffix))
    assert.ok(info, `missing property symbol: ${suffix}`)
    const occurrences = decoded.occurrences.filter(
      occurrence => occurrence.symbol === info.symbol
    )
    assert.ok(
      occurrences.some(
        occurrence =>
          (occurrence.symbol_roles & scip.SymbolRole.Definition) !== 0
      )
    )
    assert.ok(
      occurrences.some(
        occurrence =>
          (occurrence.symbol_roles & scip.SymbolRole.Definition) === 0
      )
    )
  }
})

test.run()
