// < definition scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/

export function propertyAssignment() {
//              ^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
  return { a: 'a' }
//         ^ definition scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/a0:
}
export function shorthandPropertyAssignment() {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
  const a = 'a'
//      ^ definition local 2
  return { a }
//         ^ definition scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/a1:
//         ^ reference local 2
}

