import { Calculator } from '../math'

// A named test helper, in a test file because it is under __tests__.
export function calculatorWith(...values: number[]): Calculator {
  const calculator = new Calculator()
  for (const value of values) {
    calculator.plus(value)
  }
  return calculator
}
