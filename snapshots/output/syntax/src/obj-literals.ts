  interface Slay {
// definition syntax 1.0.0 src/`obj-literals.ts`/
//documentation ```ts\nmodule "obj-literals.ts"\n```
//          ^^^^ definition syntax 1.0.0 src/`obj-literals.ts`/Slay#
//          documentation ```ts\ninterface Slay\n```
    yass: boolean
//  ^^^^ definition syntax 1.0.0 src/`obj-literals.ts`/Slay#yass.
//  documentation ```ts\n(property) yass: true\n```
  }
  
  export function abc(): Slay {
//                ^^^ definition syntax 1.0.0 src/`obj-literals.ts`/abc().
//                documentation ```ts\nfunction abc(): Slay\n```
//                       ^^^^ reference syntax 1.0.0 src/`obj-literals.ts`/Slay#
    return {
      yass: true,
//    ^^^^ reference syntax 1.0.0 src/`obj-literals.ts`/Slay#yass.
    }
  }
  
