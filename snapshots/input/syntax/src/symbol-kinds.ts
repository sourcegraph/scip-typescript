// format-options: showKinds
export const constant = 1
export let mutable = 2
export var legacy = 3

export type Alias<T> = { value: T }

export interface Contract<T> {
  property: T
  method(value: T): T
}

export enum Choice {
  First,
}

export namespace Space {
  export const nested = 1
}

export class Example<T> implements Contract<T> {
  static staticProperty = 1
  property: T

  constructor(property: T) {
    this.property = property
  }

  method(value: T): T {
    return value
  }

  static staticMethod(value: number): number {
    return value
  }

  get accessor(): T {
    return this.property
  }

  set accessor(value: T) {
    this.property = value
  }

  explicitThis(this: Example<T>, value: T): T {
    return value
  }
}

export function identity<T>(value: T): T {
  const local = value
  let mutableLocal = local
  return mutableLocal
}
