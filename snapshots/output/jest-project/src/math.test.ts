// language TypeScript
// < definition test jest-project 1.0.0 src/`math.test.ts`/

import { calculatorWith } from './__tests__/helpers'
//       ^^^^^^^^^^^^^^ reference test jest-project 1.0.0 src/__tests__/`helpers.ts`/calculatorWith().
//                             ^^^^^^^^^^^^^^^^^^^^^ reference test jest-project 1.0.0 src/__tests__/`helpers.ts`/
import { add } from './math'
//       ^^^ reference test jest-project 1.0.0 src/`math.ts`/add().
//                  ^^^^^^^^ reference test jest-project 1.0.0 src/`math.ts`/

// A helper function in a test file.
function expectSum(values: number[], expected: number): void {
//       ^^^^^^^^^ definition test jest-project 1.0.0 src/`math.test.ts`/expectSum().
//                 ^^^^^^ definition test jest-project 1.0.0 src/`math.test.ts`/expectSum().(values)
//                                   ^^^^^^^^ definition test jest-project 1.0.0 src/`math.test.ts`/expectSum().(expected)
  expect(calculatorWith(...values).total).toBe(expected)
//^^^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/expect().
//       ^^^^^^^^^^^^^^ reference test jest-project 1.0.0 src/__tests__/`helpers.ts`/calculatorWith().
//                         ^^^^^^ reference test jest-project 1.0.0 src/`math.test.ts`/expectSum().(values)
//                                 ^^^^^ reference test jest-project 1.0.0 src/`math.ts`/Calculator#total.
//                                        ^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/expect().typeLiteral0:toBe().
//                                             ^^^^^^^^ reference test jest-project 1.0.0 src/`math.test.ts`/expectSum().(expected)
}

describe('math', () => {
//^^^^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/describe().
  test('add returns the sum', () => {
//^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/test().
    const sum = add(1, 2)
//        ^^^ definition test local 2
//              ^^^ reference test jest-project 1.0.0 src/`math.ts`/add().
    expect(sum).toBe(3)
//  ^^^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/expect().
//         ^^^ reference test local 2
//              ^^^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/expect().typeLiteral0:toBe().
  })
  it('sums values with a calculator', () => {
//^^ reference test jest-project 1.0.0 src/`jest-globals.d.ts`/it().
    expectSum([1, 2, 3], 6)
//  ^^^^^^^^^ reference test jest-project 1.0.0 src/`math.test.ts`/expectSum().
  })
})

