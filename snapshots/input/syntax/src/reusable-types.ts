// Reusable types for other snapshot tests

export interface Option<A> {
  value?: A
}

export interface Numbers {
  property: number
}
export interface Strings {
  property2: string
}
export type Configuration = Numbers & Strings

export class GenericClass<A> {
  constructor(public readonly values: A[]) {}
  public map(fn: (a: A) => A): A[] {
    return this.values.map(a => fn(a))
  }
}

export interface Superinterface {
  property: string
  interfaceMethod(): string
}
export interface GenericInterface<T> {
  property: T
  interfaceMethod(): string
}
