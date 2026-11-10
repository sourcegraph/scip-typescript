import { create } from '@bufbuild/protobuf'
import {
  type MultiLineRange,
  MultiLineRangeSchema,
  type Occurrence,
  type SingleLineRange,
  SingleLineRangeSchema,
} from '@scip-code/scip'
import * as ts from 'typescript'

import { Position } from './Position.js'

export class Range {
  constructor(
    public readonly start: Position,
    public readonly end: Position
  ) {}
  public compare(other: Range): number {
    const byStart = this.start.compare(other.start)
    if (byStart !== 0) {
      return byStart
    }
    return this.end.compare(other.end)
  }
  public toTypedRange(): Occurrence['typedRange'] {
    return this.isSingleLine()
      ? { case: 'singleLineRange', value: this.toSingleLineRange() }
      : { case: 'multiLineRange', value: this.toMultiLineRange() }
  }
  public toTypedEnclosingRange(): Occurrence['typedEnclosingRange'] {
    return this.isSingleLine()
      ? { case: 'singleLineEnclosingRange', value: this.toSingleLineRange() }
      : { case: 'multiLineEnclosingRange', value: this.toMultiLineRange() }
  }
  private toSingleLineRange(): SingleLineRange {
    return create(SingleLineRangeSchema, {
      line: this.start.line,
      startCharacter: this.start.character,
      endCharacter: this.end.character,
    })
  }
  private toMultiLineRange(): MultiLineRange {
    return create(MultiLineRangeSchema, {
      startLine: this.start.line,
      startCharacter: this.start.character,
      endLine: this.end.line,
      endCharacter: this.end.character,
    })
  }
  public static fromTypedRange(
    range: Occurrence['typedRange'] | Occurrence['typedEnclosingRange']
  ): Range | undefined {
    const value = range.value
    if (value === undefined) {
      return undefined
    }
    if (value.$typeName === 'scip.SingleLineRange') {
      return new Range(
        new Position(value.line, value.startCharacter),
        new Position(value.line, value.endCharacter)
      )
    }
    return new Range(
      new Position(value.startLine, value.startCharacter),
      new Position(value.endLine, value.endCharacter)
    )
  }
  public static fromOccurrence(occurrence: Occurrence): Range {
    const range = Range.fromTypedRange(occurrence.typedRange)
    if (!range) {
      throw new Error(`occurrence of '${occurrence.symbol}' has no range`)
    }
    return range
  }
  public toString(): string {
    return `${this.start.line}:${this.start.character}:${this.end.line}:${this.end.character}`
  }

  public static fromNode(node: ts.Node): Range {
    const sourceFile = node.getSourceFile()
    const start = sourceFile.getLineAndCharacterOfPosition(node.getStart())
    const end = sourceFile.getLineAndCharacterOfPosition(node.getEnd())
    return new Range(
      new Position(start.line, start.character),
      new Position(end.line, end.character)
    )
  }

  public isSingleLine(): boolean {
    return this.start.line === this.end.line
  }
}
