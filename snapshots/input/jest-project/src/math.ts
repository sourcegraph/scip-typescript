export function add(a: number, b: number): number {
  return a + b
}

export class Calculator {
  public total = 0
  public plus(value: number): Calculator {
    this.total = add(this.total, value)
    return this
  }
}
