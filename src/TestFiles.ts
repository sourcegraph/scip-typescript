import * as path from 'path'

import { type Document, SymbolRole } from '@scip-code/scip'

/**
 * Matches JavaScript and TypeScript files under a `__tests__` directory at any
 * depth, such as `src/__tests__/helpers.ts`. Jest runs every such file, so
 * helpers there are test code. The file name glob does not match them.
 */
export const testsDirectoryGlob = '**/__tests__/**/*.?([mc])[jt]s?(x)'

/**
 * Matches JavaScript and TypeScript files whose name without its extension is
 * `test` or `spec`, or ends with `.test` or `.spec`, such as `src/test.ts` and
 * `src/cart.spec.tsx`. Jest runs these files, and also accepts repeated words,
 * such as `testspec.ts`. Every file that Vitest runs by default matches. The
 * `__tests__` glob does not match `src/cart.test.ts`.
 */
export const testFileNameGlob = '**/?(*.)+(spec|test).?([mc])[jt]s?(x)'

/**
 * Returns whether the document at `relativePath`, which is relative to
 * `--cwd` like `Document.relative_path`, is test code: whether it matches one
 * of the two globs above, which are Jest's default `testMatch`.
 */
export function isTestFile(relativePath: string): boolean {
  return (
    path.matchesGlob(relativePath, testsDirectoryGlob) ||
    path.matchesGlob(relativePath, testFileNameGlob)
  )
}

/**
 * Adds the `Test` role to every occurrence of a document that is test code,
 * and keeps the roles the occurrences already have.
 */
export function markAsTestCode(document: Document): void {
  for (const occurrence of document.occurrences) {
    occurrence.symbolRoles |= SymbolRole.Test
  }
}
