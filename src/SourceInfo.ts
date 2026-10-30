import * as ts from 'typescript'

import { Range } from './Range'
import { ScipSymbol } from './ScipSymbol'

export interface SourceInfo {
  readonly fileName: string
  /** Original user-authored source, not the transformed TypeScript program text. */
  readonly originalText: string
  readonly language?: string
  readonly isSvelte: boolean

  range(node: ts.Node): number[] | undefined
  /**
   * Overrides symbol assignment for declarations in this source file.
   * Return undefined to use normal TypeScript symbol assignment.
   * Use symbolForNode to resolve related declarations, never node itself.
   */
  declarationSymbol(
    node: ts.Node,
    symbolForNode: (node: ts.Node) => ScipSymbol
  ): ScipSymbol | undefined
}

export function typescriptSourceInfo(sourceFile: ts.SourceFile): SourceInfo {
  return {
    fileName: sourceFile.fileName,
    originalText: sourceFile.getText(),
    isSvelte: false,
    range: node => Range.fromNode(node).toLsif(),
    declarationSymbol: () => undefined,
  }
}
