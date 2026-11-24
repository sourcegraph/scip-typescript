import { calculatorWith } from './__tests__/helpers'
import { add } from './math'

// A helper function in a test file.
function expectSum(values: number[], expected: number): void {
  expect(calculatorWith(...values).total).toBe(expected)
}

describe('math', () => {
  test('add returns the sum', () => {
    const sum = add(1, 2)
    expect(sum).toBe(3)
  })
  it('sums values with a calculator', () => {
    expectSum([1, 2, 3], 6)
  })
})
