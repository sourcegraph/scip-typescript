import * as fs from 'fs'
import { join } from 'path'
import * as path from 'path'
import * as process from 'process'

import * as Diff from 'diff'
import { test } from 'uvu'

import { Input } from './Input'
import * as lsif from './lsif'
import { indexCommand } from './main'
import { Range } from './Range'

const lsiftyped = lsif.lib.codeintel.lsiftyped

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
}
for (const snapshotDirectory of snapshotDirectories) {
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
    const output = path.join(inputRoot, 'dump.lsif-typed')
    indexCommand([], {
      cwd: inputRoot,
      inferTsconfig,
      output,
      yarnWorkspaces: Boolean(packageJson.workspaces),
      progressBar: false,
      indexedProjects: new Set(),
    })
    if (inferTsconfig) {
      fs.rmSync(tsconfigJsonPath)
    }
    const index = lsif.lib.codeintel.lsiftyped.Index.deserializeBinary(
      fs.readFileSync(path.join(inputRoot, 'dump.lsif-typed'))
    )
    fs.mkdirSync(outputRoot, { recursive: true })
    fs.renameSync(output, path.join(outputRoot, 'dump.lsif-typed'))
    if (index.documents.length === 0) {
      throw new Error('empty LSIF index')
    }
    for (const document of index.documents) {
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

function formatSnapshot(
  input: Input,
  document: lsif.lib.codeintel.lsiftyped.Document
): string {
  const out: string[] = []
  document.occurrences.sort(occurrencesByLine)
  let occurrenceIndex = 0
  for (const [lineNumber, line] of input.lines.entries()) {
    out.push('  ')
    out.push(line)
    out.push('\n')
    while (
      occurrenceIndex < document.occurrences.length &&
      document.occurrences[occurrenceIndex].range[0] === lineNumber
    ) {
      const occurrence = document.occurrences[occurrenceIndex]
      occurrenceIndex++
      if (occurrence.range.length > 3) {
        // Skip multiline occurrences for now.
        continue
      }
      const range = Range.fromLsif(occurrence.range)
      out.push('//')
      out.push(' '.repeat(range.start.character))
      const length = range.end.character - range.start.character
      if (length < 0) {
        throw new Error(input.format(range, 'negative length occurrence!'))
      }
      out.push('^'.repeat(length))
      out.push(' ')
      const isDefinition =
        (occurrence.symbol_roles & lsiftyped.SymbolRole.Definition) > 0
      out.push(isDefinition ? 'definition' : 'reference')
      out.push(' ')
      const symbol = occurrence.symbol.startsWith('lsif-typescript npm ')
        ? occurrence.symbol.slice('lsif-typescript npm '.length)
        : occurrence.symbol
      out.push(symbol)
      out.push('\n')
    }
  }
  return out.join('')
}

function occurrencesByLine(
  a: lsif.lib.codeintel.lsiftyped.Occurrence,
  b: lsif.lib.codeintel.lsiftyped.Occurrence
): number {
  return Range.fromLsif(a.range).compare(Range.fromLsif(b.range))
}

test.run()
