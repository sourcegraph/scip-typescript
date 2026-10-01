import * as fs from 'fs'
import { join } from 'path'
import * as path from 'path'
import * as process from 'process'

import * as Diff from 'diff'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { Input } from './Input'
import { indexCommand } from './main'
import * as scip from './scip'
import { formatSnapshot } from './SnapshotTesting'

function isUpdateSnapshot(): boolean {
  return process.argv.includes('--update-snapshots')
}

const snapshotNodeModules = join(process.cwd(), 'snapshots', 'node_modules')
if (!fs.existsSync(snapshotNodeModules)) {
  throw new Error(
    `no such file: ${snapshotNodeModules} (to fix this problem, run 'yarn install' in the snapshots/ directory)`
  )
}
const inputDirectory = join(process.cwd(), 'snapshots', 'input')
const outputDirectory = join(process.cwd(), 'snapshots', 'output')

const snapshotDirectories = fs.readdirSync(inputDirectory)
const isUpdate = isUpdateSnapshot()
if (isUpdate && fs.existsSync(outputDirectory)) {
  fs.rmSync(outputDirectory, { recursive: true })
}
interface PackageJson {
  workspaces: string[]
  packageManager?: string
}
for (const snapshotDirectory of snapshotDirectories) {
  // Uncomment below if you want to skip certain tests for local development.
  // if (!snapshotDirectory.includes('syntax')) {
  //   continue
  // }
  const inputRoot = join(inputDirectory, snapshotDirectory)
  const outputRoot = join(outputDirectory, snapshotDirectory)
  if (!fs.statSync(inputRoot).isDirectory()) {
    continue
  }
  test(snapshotDirectory, () => {
    const packageJsonPath = path.join(inputRoot, 'package.json')
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath).toString()
    ) as PackageJson
    const tsconfigJsonPath = path.join(inputRoot, 'tsconfig.json')
    const inferTsconfig = !fs.existsSync(tsconfigJsonPath)
    const output = path.join(inputRoot, 'index.scip')
    indexCommand([], {
      cwd: inputRoot,
      inferTsconfig,
      output,
      yarnWorkspaces: Boolean(packageJson.workspaces),
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: Boolean(packageJson.packageManager?.includes('pnpm')),
      progressBar: false,
      indexedProjects: new Set(),
      globalCaches: true,
    })
    if (inferTsconfig) {
      fs.rmSync(tsconfigJsonPath)
    }
    const index = scip.scip.Index.deserializeBinary(
      fs.readFileSync(path.join(inputRoot, 'index.scip'))
    )
    fs.mkdirSync(outputRoot, { recursive: true })
    fs.renameSync(output, path.join(outputRoot, 'index.scip'))
    if (index.documents.length === 0) {
      throw new Error('empty LSIF index')
    }
    const documentPaths = new Set<string>()
    const duplicateDocuments: string[] = []
    for (const document of index.documents) {
      if (documentPaths.has(document.relative_path)) {
        duplicateDocuments.push(document.relative_path)
      }
      documentPaths.add(document.relative_path)
    }
    assert.equal(duplicateDocuments, [], 'SCIP document paths should be unique')
    const symbolInformation = new Set(
      index.documents.flatMap(document =>
        document.symbols.map(symbol => symbol.symbol)
      )
    )
    const indexedPackages = new Set(
      [...symbolInformation]
        .filter(symbol => !symbol.startsWith('local '))
        .map(symbolPackage)
    )
    for (const document of index.documents) {
      const symbols = new Set<string>()
      const duplicateSymbols: string[] = []
      for (const symbol of document.symbols) {
        if (symbols.has(symbol.symbol)) {
          duplicateSymbols.push(symbol.symbol)
        }
        symbols.add(symbol.symbol)
      }
      assert.equal(
        duplicateSymbols,
        [],
        `${document.relative_path} should not contain duplicate SymbolInformation`
      )
      const occurrences = new Set<string>()
      const duplicateOccurrences: string[] = []
      for (const occurrence of document.occurrences) {
        const key = `${occurrence.range.join(':')} ${occurrence.symbol_roles} ${occurrence.symbol}`
        if (occurrences.has(key)) {
          duplicateOccurrences.push(key)
        }
        occurrences.add(key)
      }
      assert.equal(
        duplicateOccurrences,
        [],
        `${document.relative_path} should not contain duplicate occurrences`
      )
      const missingInternalSymbols = document.occurrences
        .map(occurrence => occurrence.symbol)
        .filter(
          symbol =>
            symbol &&
            indexedPackages.has(symbolPackage(symbol)) &&
            !symbolInformation.has(symbol)
        )
      assert.equal(
        missingInternalSymbols,
        [],
        `${document.relative_path} occurrences in indexed packages should have SymbolInformation`
      )
      assert.ok(
        document.language,
        `${document.relative_path} should have a SCIP document language`
      )
      if (document.relative_path === 'src/symbol-kinds.ts') {
        assert.equal(
          document.symbols
            .filter(
              symbol =>
                symbol.kind === scip.scip.SymbolInformation.Kind.UnspecifiedKind
            )
            .map(symbol => symbol.symbol),
          [],
          'all symbols in the symbol-kind fixture should have a SCIP kind'
        )
      }
      const inputPath = path.join(inputRoot, document.relative_path)
      const relativeToInputDirectory = path.relative(inputDirectory, inputPath)
      const outputPath = path.resolve(outputDirectory, relativeToInputDirectory)
      const expected: string = fs.existsSync(outputPath)
        ? fs.readFileSync(outputPath).toString()
        : ''
      const input = Input.fromFile(inputPath)
      const obtained = formatSnapshot(input, document)
      if (obtained === expected) {
        // Test passed
        continue
      }
      if (isUpdate) {
        // Update the snapshot test to reflect the new behavior
        fs.mkdirSync(path.dirname(outputPath), {
          recursive: true,
        })
        fs.writeFileSync(outputPath, obtained)
        console.log(`updated snapshot: ${outputPath}`)
      } else {
        // Fail the test with a diff error message
        const patch = Diff.createTwoFilesPatch(
          outputPath,
          outputPath,
          expected,
          obtained,
          '(what the snapshot tests expect)',
          "(what the current code produces). Run the command 'npm run update-snapshots' to accept the new behavior."
        )
        throw new Error(patch)
      }
    }
  })
}

function symbolPackage(symbol: string): string {
  return symbol.split(' ', 4).join(' ')
}

test.run()
