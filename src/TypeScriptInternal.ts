import * as ts from 'typescript'

// Functions in this file are based directly off corresponding functions
// in the TypeScript codebase.

export function shouldSkipAlias(node: ts.Node): boolean {
  switch (node.kind) {
    case ts.SyntaxKind.ImportClause:
    case ts.SyntaxKind.ImportEqualsDeclaration:
      // TODO: How do we test this code path?
      return true
    case ts.SyntaxKind.ImportSpecifier:
      return node.parent.kind === ts.SyntaxKind.NamedImports
    case ts.SyntaxKind.BindingElement:
    case ts.SyntaxKind.VariableDeclaration:
      // TODO: How do we test this code path?
      return (
        isInJSFile(node) &&
        isVariableDeclarationInitializedToBareOrAccessedRequire(node)
      )
    default:
      return false
  }
}

function isInJSFile(node: ts.Node): boolean {
  return !!(node.flags & ts.NodeFlags.JavaScriptFile)
}

function isVariableDeclarationInitializedToBareOrAccessedRequire(
  node: ts.Node
): boolean {
  if (node.kind === ts.SyntaxKind.BindingElement) {
    node = node.parent.parent
  }
  return isVariableDeclaration(node) && !!node.initializer
  // FIXME: This requires inlining a bunch of more definitions.
  //       ts.isRequireCall(allowAccessedRequire ? ts.getLeftmostAccessExpression(node.initializer) : node.initializer, /*requireStringLiteralLikeArgument*/ true);
}

function isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration {
  return node.kind === ts.SyntaxKind.VariableDeclaration
}
export function isParameter(sym: ts.Symbol): boolean {
  // based on isFirstDeclarationOfSymbolParameter
  const declaration = sym.declarations?.[0]
  return !!ts.findAncestor(declaration, (node: ts.Node): boolean | 'quit' =>
    ts.isParameter(node)
      ? true
      : ts.isBindingElement(node) ||
        ts.isObjectBindingPattern(node) ||
        ts.isArrayBindingPattern(node)
      ? false
      : 'quit'
  )
}
