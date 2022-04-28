  export function propertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
//                documentation ```ts\n() => { a: string; }\n```
//                documentation 
    return { a: 'a' }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a0:
//           documentation ```ts\nstring\n```
//           documentation 
  }
  export function shorthandPropertyAssignment() {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
//                documentation ```ts\n() => { a: string; }\n```
//                documentation 
    const a = 'a'
//        ^ definition local 2
//        documentation ```ts\n"a"\n```
//        documentation 
    return { a }
//           ^ definition syntax 1.0.0 src/`property-assignment.ts`/a1:
//           documentation ```ts\nstring\n```
//           documentation 
//           ^ reference local 2
  }
  
