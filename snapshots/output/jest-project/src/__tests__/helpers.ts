// language TypeScript
// < definition test jest-project 1.0.0 src/__tests__/`helpers.ts`/

import { Calculator } from '../math'
//       ^^^^^^^^^^ reference test jest-project 1.0.0 src/`math.ts`/Calculator#
//                         ^^^^^^^^^ reference test jest-project 1.0.0 src/`math.ts`/

// A named test helper, in a test file because it is under __tests__.
export function calculatorWith(...values: number[]): Calculator {
//              ^^^^^^^^^^^^^^ definition test jest-project 1.0.0 src/__tests__/`helpers.ts`/calculatorWith().
//                                ^^^^^^ definition test jest-project 1.0.0 src/__tests__/`helpers.ts`/calculatorWith().(values)
//                                                   ^^^^^^^^^^ reference test jest-project 1.0.0 src/`math.ts`/Calculator#
  const calculator = new Calculator()
//      ^^^^^^^^^^ definition test local 2
//                       ^^^^^^^^^^ reference test jest-project 1.0.0 src/`math.ts`/Calculator#
  for (const value of values) {
//           ^^^^^ definition test local 5
//                    ^^^^^^ reference test jest-project 1.0.0 src/__tests__/`helpers.ts`/calculatorWith().(values)
    calculator.plus(value)
//  ^^^^^^^^^^ reference test local 2
//             ^^^^ reference test jest-project 1.0.0 src/`math.ts`/Calculator#plus().
//                  ^^^^^ reference test local 5
  }
  return calculator
//       ^^^^^^^^^^ reference test local 2
}

