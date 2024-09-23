export function propertyAssignment() {
  return { a: 'a' }
}
export function shorthandPropertyAssignment() {
  const a = 'a'
  return { a }
}
type A = { a: string }
export function typedPropertyAssignment(): A {
  return { a: 'a' }
}
