import * as path from 'path'
import { Input } from './Input'
import { Range } from './Range'
import { scip } from './scip'

const stripIndexerPrefix = 'scip-typescript npm '
const commentSyntax = '//'
const formatOptionsPrefix = '// format-options:'

function getSymbolTable(
  doc: scip.Document
): Map<string, scip.SymbolInformation> {
  const symbolTable = new Map()
  for (const symbol of doc.symbols) {
    symbolTable.set(symbol.symbol, symbol)
  }
  return symbolTable
}

function parseOptions(lines: string[]): {
  showDocs: boolean
  showRanges: boolean
} {
  const formatOptions = {
    showDocs: false,
    showRanges: false,
  }

  for (const line of lines) {
    if (!line.startsWith(formatOptionsPrefix)) {
      continue
    }

    const options = line.slice(formatOptionsPrefix.length).trim().split(',')

    for (const option of options) {
      const optionName = option.trim()

      if (!(optionName in formatOptions)) {
        throw new Error(`Invalid format option: ${optionName}`)
      }

      formatOptions[optionName as keyof typeof formatOptions] = true
    }

    break
  }

  return formatOptions
}

function symbolNameForSnapshot(fullName: string): string {
  return fullName.startsWith(stripIndexerPrefix)
    ? fullName.slice(stripIndexerPrefix.length)
    : fullName
}

export function formatSnapshot(
  input: Input,
  doc: scip.Document,
  externalSymbols: scip.SymbolInformation[] = []
): string {
  const out: string[] = []
  const symbolTable = getSymbolTable(doc)

  if (path.normalize(doc.relative_path) !== doc.relative_path) {
    throw new Error(
      `Document path must be normalized: ${doc.relative_path}`
    )
  }

  const externalSymbolTable: Map<string, scip.SymbolInformation> = new Map()
  for (const externalSymbol of externalSymbols) {
    externalSymbolTable.set(externalSymbol.symbol, externalSymbol)
  }

  const enclosingRanges: { range: Range; symbol: string }[] = []
  const symbolsWithDefinitions: Set<string> = new Set()

  const formatOptions = parseOptions(input.lines)

  for (const occurrence of doc.occurrences) {
    const isDefinition =
      (occurrence.symbol_roles & scip.SymbolRole.Definition) > 0
    if (isDefinition) {
      symbolsWithDefinitions.add(occurrence.symbol)
    }

    if (formatOptions.showRanges && occurrence.enclosing_range.length > 0) {
      enclosingRanges.push({
        range: Range.fromLsif(occurrence.enclosing_range),
        symbol: occurrence.symbol,
      })
    }
  }

  enclosingRanges.sort(enclosingRangesByLine)

  const enclosingRangeStarts: (typeof enclosingRanges)[number][][] = Array.from(
    new Array(input.lines.length),
    () => []
  )
  const enclosingRangeEnds: (typeof enclosingRanges)[number][][] = Array.from(
    new Array(input.lines.length),
    () => []
  )

  for (const enclosingRange of enclosingRanges) {
    enclosingRangeStarts[enclosingRange.range.start.line].push(enclosingRange)
    enclosingRangeEnds[enclosingRange.range.end.line].unshift(enclosingRange)
  }

  const emittedDocstrings: Set<string> = new Set()
  const pushDoc = (
    range: Range,
    symbol: string,
    isDefinition: boolean,
    isStartOfLine: boolean
  ): void => {
    // Only emit docstrings once
    if (emittedDocstrings.has(symbol)) {
      out.push('\n')
      return
    }

    // Only definitions OR symbols without a definition should be emitted
    if (!isDefinition && symbolsWithDefinitions.has(symbol)) {
      out.push('\n')
      return
    }

    emittedDocstrings.add(symbol)

    let prefix = '\n' + commentSyntax
    if (!isStartOfLine) {
      prefix += ' '.repeat(range.start.character - 2)
    }

    const pushOneDoc = (docs: string[], external: boolean): void => {
      if (!formatOptions.showDocs) {
        return
      }

      for (const documentation of docs) {
        for (const [idx, line] of documentation.split('\n').entries()) {
          out.push(prefix)
          if (idx === 0) {
            if (external) {
              out.push('external ')
            }
            out.push('documentation ')
          } else {
            out.push('            > ')
          }
          out.push(line.slice(0, 40))
          if (line.length > 40) {
            out.push('...')
          }
        }
      }
    }

    const pushOneRelationship = (relationships: scip.Relationship[]): void => {
      relationships.sort((a, b) => a.symbol.localeCompare(b.symbol))

      for (const relationship of relationships) {
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
        out.push(' ' + symbolNameForSnapshot(relationship.symbol))
      }
    }

    const externalSymbol = externalSymbolTable.get(symbol)
    if (externalSymbol) {
      pushOneDoc(externalSymbol.documentation, true)
      pushOneRelationship(externalSymbol.relationships)
    } else {
      const info = symbolTable.get(symbol)
      if (info) {
        pushOneDoc(info.documentation, false)
        pushOneRelationship(info.relationships)
      }
    }
    out.push('\n')
  }

  const pushEnclosingRange = (
    enclosingRange: {
      range: Range
      symbol: string
    },
    end: boolean = false
  ): void => {
    if (!formatOptions.showRanges) {
      return
    }

    out.push(commentSyntax)
    out.push(' '.repeat(Math.max(1, enclosingRange.range.start.character - 2)))

    if (enclosingRange.range.start.character < 2) {
      out.push('<')
    } else if (end) {
      out.push('^')
    } else {
      out.push('⌄')
    }

    if (end) {
      out.push(' end ')
    } else {
      out.push(' start ')
    }
    out.push('enclosing_range ')
    out.push(symbolNameForSnapshot(enclosingRange.symbol))
    out.push('\n')
  }

  doc.occurrences.sort(occurrencesByLine)
  let occurrenceIndex = 0

  for (const [lineNumber, line] of input.lines.entries()) {
    // Write 0,0 items ABOVE the first line.
    //  This is the only case where we would need to do this.
    if (occurrenceIndex === 0) {
      const occurrence = doc.occurrences[occurrenceIndex]
      const range = Range.fromLsif(occurrence.range)

      // This is essentially a "file-based" item.
      //  This guarantees that this sits above everything else in the file.
      if (range.start.character === 0 && range.end.character === 0) {
        const isDefinition =
          (occurrence.symbol_roles & scip.SymbolRole.Definition) > 0
        out.push(commentSyntax)
        out.push(' < ')
        out.push(isDefinition ? 'definition' : 'reference')
        out.push(' ')
        out.push(symbolNameForSnapshot(occurrence.symbol))
        pushDoc(range, occurrence.symbol, isDefinition, true)
        out.push('\n')

        occurrenceIndex++
      }
    }

    // Check if any enclosing ranges start on this line
    for (const enclosingRange of enclosingRangeStarts[lineNumber]) {
      pushEnclosingRange(enclosingRange)
    }

    out.push('')
    out.push(line)
    out.push('\n')
    while (
      occurrenceIndex < doc.occurrences.length &&
      doc.occurrences[occurrenceIndex].range[0] === lineNumber
    ) {
      const occurrence = doc.occurrences[occurrenceIndex]
      occurrenceIndex++

      if (occurrence.symbol === undefined) {
        continue
      }

      if (occurrence.range.length > 3) {
        throw new Error('not yet implemented, multi-line ranges')
      }

      const range = Range.fromLsif(occurrence.range)

      out.push(commentSyntax)
      const isStartOfLine = range.start.character === 0
      if (!isStartOfLine && range.start.character > 2) {
        out.push(' '.repeat(range.start.character - 2))
      }

      let modifier = 0
      if (isStartOfLine) {
        modifier = 1
      }

      const caretLength = range.end.character - range.start.character - modifier
      if (caretLength < 0) {
        throw new Error(input.format(range, 'negative length occurrence!'))
      }
      out.push('^'.repeat(caretLength))
      out.push(' ')
      const isDefinition =
        (occurrence.symbol_roles & scip.SymbolRole.Definition) > 0
      out.push(isDefinition ? 'definition' : 'reference')
      out.push(' ')
      const symbol = symbolNameForSnapshot(occurrence.symbol)
      out.push(symbol.replace('\n', '|'))

      pushDoc(range, occurrence.symbol, isDefinition, isStartOfLine)
    }

    // Check if any enclosing ranges end on this line
    for (const enclosingRange of enclosingRangeEnds[lineNumber]) {
      pushEnclosingRange(enclosingRange, true)
    }
  }
  return out.join('')
}

function occurrencesByLine(a: scip.Occurrence, b: scip.Occurrence): number {
  return Range.fromLsif(a.range).compare(Range.fromLsif(b.range))
}

function enclosingRangesByLine(
  a: { range: Range; symbol: string },
  b: { range: Range; symbol: string }
): number {
  // Return the range that starts first, and if they start at the same line, the one that ends last (enclosing).
  const rangeCompare = a.range.compare(b.range)

  if (rangeCompare !== 0) {
    return rangeCompare
  }

  return b.range.end.line - a.range.end.line
}
