  export function propertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
//                documentation ```ts\nfunction propertyAssignment(): { a: string; }\n```
    return { a: 'a' }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a0:
//           documentation ```ts\n(property) a: string\n```
  }
  export function shorthandPropertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
//                documentation ```ts\nfunction shorthandPropertyAssignment(): { a: string; }\n```
    const a = 'a'
//        ^ definition local 2
//        documentation ```ts\nvar a: "a"\n```
    return { a }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a1:
//           documentation ```ts\n(property) a: string\n```
//           ^ reference local 2
  }
  
