  export function propertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
    return { a: 'a' }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a0:
  }
  export function shorthandPropertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
    const a = 'a'
//        ^ definition local 2
    return { a }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a1:
//           ^ reference local 2
  }
  
