import * as ts from 'typescript'

import { Range } from './Range'

export interface SourceInfo {
  readonly fileName: string
  /** Original user-authored source, not the transformed TypeScript program text. */
  readonly originalText: string
  readonly language?: string
  readonly isSvelte: boolean

  range(node: ts.Node): number[] | undefined
  isComponentDeclaration(node: ts.Node): boolean
  isComponentPropsDeclaration(node: ts.Node): boolean
  canonicalDeclaration(node: ts.Node): ts.Node
}

export function typescriptSourceInfo(sourceFile: ts.SourceFile): SourceInfo {
  return {
    fileName: sourceFile.fileName,
    originalText: sourceFile.getText(),
    isSvelte: false,
    range: node => Range.fromNode(node).toLsif(),
    isComponentDeclaration: () => false,
    isComponentPropsDeclaration: () => false,
    canonicalDeclaration: node => node,
  }
}
