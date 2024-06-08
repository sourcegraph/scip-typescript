import ts from 'typescript';

import { Range } from './Range';

export function printFullAST(sourceFile: ts.SourceFile): void {
    console.log(`path: ${sourceFile.fileName}`)
    printPartialAST(sourceFile)
}

export function printPartialAST(node: ts.Node): void {
  let indent = 0;
  const print = (node: ts.Node): void => {
      const range = Range.fromNode(node)
      console.log(new Array(indent + 1).join(' ') + ts.SyntaxKind[node.kind] + ` (${range.start.line},${range.start.character}-${range.end.character})`);
      indent++;
      ts.forEachChild(node, print);
      indent--;
    }
  print(node)
}
