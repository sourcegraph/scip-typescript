interface SomeInterface {
  a: number
  b: number
  c: number
}
// "Go to definition" does not work for the 'a', 'b' and 'c' string literals
// below when using tsserver so it's fine that scip-typescript does not emit
// occurrences here either.
export type OmitInterface = Omit<SomeInterface, 'a' | 'b'>
export type PickInterface = Pick<SomeInterface, 'b' | 'c'>
