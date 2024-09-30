export function propertyAssignment() {
  return { a: 'a' }
}
export function shorthandPropertyAssignment() {
  const a = 'a'
  return { a }
}
type A = { a: string; b: number }
export function typedPropertyAssignment(): A {
  // prettier-ignore
  return { a: 'a', "b": 10 }
}
