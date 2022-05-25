import { Input } from './Input'
import * as lsif from './lsif'
import { Range } from './Range'

const lsiftyped = lsif.lib.codeintel.lsiftyped

export function formatSnapshot(
  input: Input,
  document: lsif.lib.codeintel.lsiftyped.Document
): string {
  const out: string[] = []
  document.occurrences.sort(occurrencesByLine)
  const symbolTable = new Map<
    string,
    lsif.lib.codeintel.lsiftyped.SymbolInformation
  >()
  for (const symbolInfo of document.symbols) {
    symbolTable.set(symbolInfo.symbol, symbolInfo)
  }
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
      const symbol = occurrence.symbol.startsWith('scip-typescript npm ')
        ? occurrence.symbol.slice('scip-typescript npm '.length)
        : occurrence.symbol
      out.push(symbol)
      const info = symbolTable.get(occurrence.symbol)
      if (!isDefinition || !info) {
        out.push('\n')
        continue
      }
      const prefix = '\n//' + ' '.repeat(range.start.character)
      for (const documentation of info.documentation) {
        out.push(prefix)
        out.push('documentation ')
        out.push(documentation.replace(/\n/g, '\\n'))
      }
      info.relationships.sort((a, b) => a.symbol.localeCompare(b.symbol))
      for (const relationship of info.relationships) {
        out.push(prefix)
        out.push('relationship')
        if (relationship.is_implementation) {
          out.push(' implementation')
        }
        if (relationship.is_reference) {
          out.push(' reference')
        }
        if (relationship.is_type_definition) {
          out.push(' type_definition')
        }
        out.push(' ' + relationship.symbol)
      }
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
