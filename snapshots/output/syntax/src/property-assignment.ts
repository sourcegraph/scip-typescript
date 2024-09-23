// < definition syntax 1.0.0 src/`property-assignment.ts`/

export function propertyAssignment() {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
  return { a: 'a' }
//         ^ definition syntax 1.0.0 src/`property-assignment.ts`/a0:
}
export function shorthandPropertyAssignment() {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
  const a = 'a'
//      ^ definition local 2
  return { a }
//         ^ definition syntax 1.0.0 src/`property-assignment.ts`/a1:
//         ^ reference local 2
}
type A = { a: string }
//   ^ definition syntax 1.0.0 src/`property-assignment.ts`/A#
//         ^ definition syntax 1.0.0 src/`property-assignment.ts`/A#typeLiteral3:a.
export function typedPropertyAssignment(): A {
//              ^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/typedPropertyAssignment().
//                                         ^ reference syntax 1.0.0 src/`property-assignment.ts`/A#
  return { a: 'a' }
//         ^ reference syntax 1.0.0 src/`property-assignment.ts`/A#typeLiteral3:a.
}

