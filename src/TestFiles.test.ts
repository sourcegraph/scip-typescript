import * as path from 'path'

import { create } from '@bufbuild/protobuf'
import { DocumentSchema, OccurrenceSchema, SymbolRole } from '@scip-code/scip'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import {
  isTestFile,
  markAsTestCode,
  testFileNameGlob,
  testsDirectoryGlob,
} from './TestFiles.js'

/**
 * Checks which glob matches `relativePath`, and that `isTestFile` accepts the
 * path when either glob does.
 */
function checkTestFileGlobs(
  relativePath: string,
  inTestsDirectory: boolean,
  hasTestFileName: boolean
): void {
  test(`test file globs on ${relativePath}`, () => {
    assert.equal(
      [
        path.matchesGlob(relativePath, testsDirectoryGlob),
        path.matchesGlob(relativePath, testFileNameGlob),
      ],
      [inTestsDirectory, hasTestFileName]
    )
    assert.equal(isTestFile(relativePath), inTestsDirectory || hasTestFileName)
  })
}

// Only the __tests__ glob matches helpers in __tests__, at any depth.
checkTestFileGlobs('src/__tests__/helpers.ts', true, false)
checkTestFileGlobs('__tests__/helpers.ts', true, false)
checkTestFileGlobs('src/__tests__/fixtures/data.cjs', true, false)
// Only the file name glob matches test files outside __tests__. Its two forms
// do not imply each other: `*.test.*` misses `test.ts`, and `test.*` misses
// `cart.test.ts`.
checkTestFileGlobs('cart.test.ts', false, true)
checkTestFileGlobs('src/cart.spec.tsx', false, true)
checkTestFileGlobs('src/cart.test.mts', false, true)
checkTestFileGlobs('src/test.ts', false, true)
checkTestFileGlobs('src/spec.js', false, true)
// Jest accepts repeated words.
checkTestFileGlobs('src/testspec.ts', false, true)
// Both globs match a test file in __tests__.
checkTestFileGlobs('src/__tests__/cart.test.ts', true, true)
// Neither glob matches other files. The extension must directly follow
// `test` or `spec`, and JSON and Svelte files, which scip-typescript also
// indexes, are not files that Jest runs.
checkTestFileGlobs('src/cart.ts', false, false)
checkTestFileGlobs('src/contest.ts', false, false)
checkTestFileGlobs('src/cart.testing.ts', false, false)
checkTestFileGlobs('src/test.setup.ts', false, false)
checkTestFileGlobs('src/testUtils/cart.ts', false, false)
checkTestFileGlobs('test/cart.ts', false, false)
checkTestFileGlobs('src/__tests__/data.json', false, false)
checkTestFileGlobs('src/Button.test.svelte', false, false)

test('markAsTestCode adds the Test role and keeps the other roles', () => {
  const document = create(DocumentSchema, {
    occurrences: [
      create(OccurrenceSchema, { symbolRoles: SymbolRole.Definition }),
      create(OccurrenceSchema, { symbolRoles: 0 }),
      create(OccurrenceSchema, {
        symbolRoles: SymbolRole.Definition | SymbolRole.Test,
      }),
    ],
  })
  markAsTestCode(document)
  assert.equal(
    document.occurrences.map(occurrence => occurrence.symbolRoles),
    [
      SymbolRole.Definition | SymbolRole.Test,
      SymbolRole.Test,
      SymbolRole.Definition | SymbolRole.Test,
    ]
  )
})

test.run()
