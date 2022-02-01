import * as fs from 'fs'
import * as process from 'process'
import { join } from 'path'
import { index as lsifIndex } from './main'
import { Range } from './Range'
import { Input } from './Input'
import * as lsif from './lsif'
import { test } from 'uvu'
import * as path from 'path'
import * as Diff from 'diff'

const lsif_typed = lsif.lib.codeintel.lsif_typed

function isUpdateSnapshot(): boolean {
  return process.argv.includes('--update-snapshots')
}

const inputDir = join(process.cwd(), 'snapshots', 'input')
const outputDir = join(process.cwd(), 'snapshots', 'output')

const snapshotDirectories = fs.readdirSync(inputDir)
const isUpdate = isUpdateSnapshot()
if (isUpdate && fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true })
}
for (const snapshotDirectory of snapshotDirectories) {
  test(snapshotDirectory, () => {
    const index = new lsif.lib.codeintel.lsif_typed.Index()
    const projectRoot = join(inputDir, snapshotDirectory)
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
    fs.writeFileSync(
      path.join(projectRoot, 'dump.lsif-typed'),
      index.serializeBinary()
    )
    for (const document of index.documents) {
      const inputPath = path.join(projectRoot, document.relative_path)
      const relativeToInputDir = path.relative(inputDir, inputPath)
      const outputPath = path.resolve(outputDir, relativeToInputDir)
      const expected: string = fs.existsSync(outputPath)
        ? fs.readFileSync(outputPath).toString()
        : ''
      const input = Input.fromFile(inputPath)
      const obtained = formatSnapshot(input, document)
      if (obtained !== expected) {
        if (isUpdate) {
          fs.mkdirSync(path.dirname(outputPath), {
            recursive: true,
          })
          fs.writeFileSync(outputPath, obtained)
          console.log(`updated snapshot: ${outputPath}`)
        } else {
          const patch = Diff.createTwoFilesPatch(
            outputPath,
            outputPath,
            expected,
            obtained,
            `(what the snapshot tests expect)`,
            `(what the current code produces). Run the command 'npm run update-snapshots' to accept the new behavior.`
          )
          throw new Error(patch)
        }
      }
    }
  })
}

function formatSnapshot(
  input: Input,
  doc: lsif.lib.codeintel.lsif_typed.Document
): string {
  const out: string[] = []
  doc.occurrences.sort(occurrencesByLine)
  let occurrenceIndex = 0
  for (const [lineNumber, line] of input.lines.entries()) {
    out.push('  ')
    out.push(line)
    out.push('\n')
    while (
      occurrenceIndex < doc.occurrences.length &&
      doc.occurrences[occurrenceIndex].range[0] == lineNumber
    ) {
      const occurrence = doc.occurrences[occurrenceIndex]
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
