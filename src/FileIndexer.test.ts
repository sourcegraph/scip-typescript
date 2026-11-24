import * as path from 'path'

import { create, equals, fromBinary, toBinary } from '@bufbuild/protobuf'
import {
  type Document,
  DocumentSchema,
  IndexSchema,
  SymbolInformation_Kind,
  SymbolRole,
} from '@scip-code/scip'
import * as ts from 'typescript'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { FileIndexer } from './FileIndexer.js'
import { Input } from './Input.js'
import { Packages } from './Packages.js'
import { ScipSymbol } from './ScipSymbol.js'
import { typescriptSourceInfo } from './SourceInfo.js'

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
  const document = create(DocumentSchema)
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
      npmWorkspaces: false,
      globalCaches: true,
      indexedProjects: new Set(),
      writeIndex: () => {},
    },
    Input.fromFile(fileName),
    document,
    globalSymbols,
    new Map(),
    new Packages(cwd),
    sourceFile,
    typescriptSourceInfo(sourceFile),
    new Map()
  ).index()

  assert.ok(
    document.occurrences.some(
      occurrence =>
        occurrence.symbol.startsWith('local ') &&
        (occurrence.symbolRoles & SymbolRole.Definition) !== 0
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
  const document = create(DocumentSchema)
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
      npmWorkspaces: false,
      globalCaches: true,
      indexedProjects: new Set(),
      writeIndex: () => {},
    },
    Input.fromFile(fileName),
    document,
    new Map(),
    new Map(),
    new Packages(cwd),
    sourceFile,
    typescriptSourceInfo(sourceFile),
    new Map()
  ).index()

  const index = create(IndexSchema, { documents: [document] })
  const decoded = fromBinary(IndexSchema, toBinary(IndexSchema, index))
    .documents[0]
  assert.ok(equals(DocumentSchema, decoded, document))
  assert.equal(decoded.symbols[0].documentation, [])
  assert.equal(
    decoded.symbols[0].signatureDocumentation?.text,
    'module "module-�"'
  )

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
      decoded.symbols.some(
        info =>
          info.signatureDocumentation?.language === 'typescript' &&
          info.signatureDocumentation.text === signature
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
        occurrence => (occurrence.symbolRoles & SymbolRole.Definition) !== 0
      )
    )
    assert.ok(
      occurrences.some(
        occurrence => (occurrence.symbolRoles & SymbolRole.Definition) === 0
      )
    )
  }
})

function indexDiagnosticsFixture(documentation: boolean): Document {
  const cwd = path.resolve('snapshots/input/diagnostics')
  const fileName = path.join(cwd, 'index.ts')
  const program = ts.createProgram([fileName], {
    noEmit: true,
    target: ts.ScriptTarget.ES2022,
  })
  const sourceFile = program.getSourceFile(fileName)!
  const document = create(DocumentSchema)
  new FileIndexer(
    program.getTypeChecker(),
    {
      cwd,
      projectRoot: cwd,
      projectDisplayName: 'diagnostics',
      output: '',
      inferTsconfig: false,
      progressBar: false,
      yarnWorkspaces: false,
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: false,
      npmWorkspaces: false,
      globalCaches: true,
      documentation,
      indexedProjects: new Set(),
      writeIndex: () => {},
    },
    Input.fromFile(fileName),
    document,
    new Map(),
    new Map(),
    new Packages(cwd),
    sourceFile,
    typescriptSourceInfo(sourceFile),
    new Map()
  ).index()
  return document
}

test('--no-documentation skips hover documentation but keeps symbol kinds', () => {
  const declarationSymbols = (document: Document) =>
    document.symbols.filter(info => info.kind !== SymbolInformation_Kind.File)
  const withDocumentation = declarationSymbols(indexDiagnosticsFixture(true))
  const withoutDocumentation = declarationSymbols(
    indexDiagnosticsFixture(false)
  )

  assert.ok(
    withDocumentation.every(info => info.signatureDocumentation !== undefined),
    'the fixture must produce signatures when documentation is on'
  )
  assert.equal(
    withoutDocumentation.map(info => [info.symbol, info.kind]),
    withDocumentation.map(info => [info.symbol, info.kind])
  )
  for (const info of withoutDocumentation) {
    assert.equal(info.documentation, [])
    assert.is(info.signatureDocumentation, undefined)
  }
})

test.run()
