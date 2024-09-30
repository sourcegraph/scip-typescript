import * as ts from 'typescript'

// Functions in this file are based directly off corresponding functions
// in the TypeScript codebase.

export function shouldSkipAlias(node: ts.Node): boolean {
  switch (node.kind) {
    case ts.SyntaxKind.ImportClause:
    case ts.SyntaxKind.ImportEqualsDeclaration: {
      // TODO: How do we test this code path?
      return true
    }
    case ts.SyntaxKind.ImportSpecifier: {
      return node.parent.kind === ts.SyntaxKind.NamedImports
    }
    case ts.SyntaxKind.BindingElement:
    case ts.SyntaxKind.VariableDeclaration: {
      // TODO: How do we test this code path?
      return (
        isInJSFile(node) &&
        isVariableDeclarationInitializedToBareOrAccessedRequire(node)
      )
    }
    default: {
      return false
    }
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

// The corresponding function is marked @internal here:
// https://sourcegraph.com/github.com/microsoft/TypeScript@fbcdb8cf4fbbbea0111a9adeb9d0d2983c088b7c/-/blob/src/compiler/utilities.ts?L10586-10589
export function getTextOfJsxAttributeName(node: ts.JsxAttributeName): string {
  return ts.isIdentifier(node)
    ? ts.idText(node)
    : `${ts.idText(node.namespace)}:${ts.idText(node.name)}`
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/services/services.ts?L3557
type ObjectLiteralElementWithName = ts.ObjectLiteralElement & {
  name: ts.PropertyName
  parent: ts.ObjectLiteralExpression | ts.JsxAttributes
}
// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/services/services.ts?L3534
export function getContainingObjectLiteralElement(
  node: ts.Node
): ObjectLiteralElementWithName | undefined {
  const element = getContainingObjectLiteralElementWorker(node)
  return element &&
    (ts.isObjectLiteralExpression(element.parent) ||
      ts.isJsxAttributes(element.parent))
    ? (element as ObjectLiteralElementWithName)
    : undefined
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/services/services.ts?L3538
function getContainingObjectLiteralElementWorker(
  node: ts.Node
): ts.ObjectLiteralElement | undefined {
  switch (node.kind) {
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
    case ts.SyntaxKind.NumericLiteral: {
      if (node.parent.kind === ts.SyntaxKind.ComputedPropertyName) {
        return ts.isObjectLiteralElement(node.parent.parent)
          ? node.parent.parent
          : undefined
      }
      // falls through
    }

    case ts.SyntaxKind.Identifier: {
      return ts.isObjectLiteralElement(node.parent) &&
        (node.parent.parent.kind === ts.SyntaxKind.ObjectLiteralExpression ||
          node.parent.parent.kind === ts.SyntaxKind.JsxAttributes) &&
        node.parent.name === node
        ? node.parent
        : undefined
    }
  }
  return undefined
}

export function getPropertySymbolFromContextualType(
  node: ObjectLiteralElementWithName,
  contextualType: ts.Type
): ts.Symbol | undefined {
  const name = getNameFromPropertyName(node.name)
  if (!name) {
    return undefined
  }
  return contextualType.getProperty(name)
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/services/utilities.ts?L2433
export function getNameFromPropertyName(
  name: ts.PropertyName
): string | undefined {
  return name.kind === ts.SyntaxKind.ComputedPropertyName
    ? // treat computed property names where expression is string/numeric literal as just string/numeric literal
      isStringOrNumericLiteralLike(name.expression)
      ? name.expression.text
      : undefined
    : ts.isPrivateIdentifier(name)
      ? ts.idText(name)
      : getTextOfIdentifierOrLiteral(name)
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/compiler/utilities.ts?L5269
export function isStringOrNumericLiteralLike(
  node: ts.Node
): node is ts.StringLiteralLike | ts.NumericLiteral {
  return ts.isStringLiteralLike(node) || ts.isNumericLiteral(node)
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/compiler/utilities.ts?L5346
export function getTextOfIdentifierOrLiteral(
  node: ts.PropertyNameLiteral | ts.PrivateIdentifier
): string {
  return ts.isMemberName(node)
    ? ts.idText(node)
    : ts.isJsxNamespacedName(node)
      ? getTextOfJsxNamespacedName(node)
      : node.text
}

// https://sourcegraph.com/github.com/microsoft/TypeScript@2c23beae0297fe3e57868d02af8c9084b136f78c/-/blob/src/compiler/utilities.ts?L11012
export function getTextOfJsxNamespacedName(node: ts.JsxNamespacedName): string {
  return `${ts.idText(node.namespace)}:${ts.idText(node.name)}`
}
