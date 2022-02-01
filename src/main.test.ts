import * as fs from 'fs'
import { join } from 'path'
import * as path from 'path'
import * as process from 'process'

import * as Diff from 'diff'
import { test } from 'uvu'

import { Input } from './Input'
import * as lsif from './lsif'
import { index as lsifIndex } from './main'
import { Range } from './Range'

const lsif_typed = lsif.lib.codeintel.lsif_typed

function isUpdateSnapshot(): boolean {
  return process.argv.includes('--update-snapshots')
}

const inputDirectory = join(process.cwd(), 'snapshots', 'input')
const outputDirectory = join(process.cwd(), 'snapshots', 'output')

const snapshotDirectories = fs.readdirSync(inputDirectory)
const isUpdate = isUpdateSnapshot()
if (isUpdate && fs.existsSync(outputDirectory)) {
  fs.rmSync(outputDirectory, { recursive: true })
}
for (const snapshotDirectory of snapshotDirectories) {
  test(snapshotDirectory, () => {
    const index = new lsif.lib.codeintel.lsif_typed.Index()
    const projectRoot = join(inputDirectory, snapshotDirectory)
    lsifIndex({
      projectRoot,
      project: projectRoot,
      writeIndex: partialIndex => {
        if (partialIndex.metadata) {
          index.metadata = partialIndex.metadata
        }
        for (const document of partialIndex.documents) {
          index.documents.push(document)
        }
      },
    })
    // eslint-disable-next-line no-sync
    fs.writeFileSync(
      path.join(projectRoot, 'dump.lsif-typed'),
      index.serializeBinary()
    )
    for (const document of index.documents) {
      const inputPath = path.join(projectRoot, document.relative_path)
      const relativeToInputDirectory = path.relative(inputDirectory, inputPath)
      const outputPath = path.resolve(outputDirectory, relativeToInputDirectory)
      // eslint-disable-next-line no-sync
      const expected: string = fs.existsSync(outputPath)
        ? // eslint-disable-next-line no-sync
          fs.readFileSync(outputPath).toString()
        : ''
      const input = Input.fromFile(inputPath)
      const obtained = formatSnapshot(input, document)
      if (obtained !== expected) {
        if (isUpdate) {
          // eslint-disable-next-line no-sync
          fs.mkdirSync(path.dirname(outputPath), {
            recursive: true,
          })
          // eslint-disable-next-line no-sync
          fs.writeFileSync(outputPath, obtained)
          console.log(`updated snapshot: ${outputPath}`)
        } else {
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
    }
  })
}

function formatSnapshot(
  input: Input,
  document: lsif.lib.codeintel.lsif_typed.Document
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
        (occurrence.symbol_roles & lsif_typed.SymbolRole.Definition) > 0
      out.push(isDefinition ? 'definition' : 'reference')
      out.push(' ')
      const symbol = occurrence.symbol.startsWith('lsif-node npm ')
        ? occurrence.symbol.slice('lsif-noode npm'.length)
        : occurrence.symbol
      out.push(symbol)
      out.push('\n')
    }
  }
  return out.join('')
}

function occurrencesByLine(
  a: lsif.lib.codeintel.lsif_typed.Occurrence,
  b: lsif.lib.codeintel.lsif_typed.Occurrence
): number {
  return Range.fromLsif(a.range).compare(Range.fromLsif(b.range))
}

test.run()
