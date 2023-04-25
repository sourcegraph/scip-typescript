  interface SomeInterface {
// definition syntax 1.0.0 src/`string-literals.ts`/
//documentation ```ts\nmodule "string-literals.ts"\n```
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
//          documentation ```ts\ninterface SomeInterface\n```
    a: number
//  ^ definition syntax 1.0.0 src/`string-literals.ts`/SomeInterface#a.
//  documentation ```ts\n(property) a: number\n```
    b: number
//  ^ definition syntax 1.0.0 src/`string-literals.ts`/SomeInterface#b.
//  documentation ```ts\n(property) b: number\n```
    c: number
//  ^ definition syntax 1.0.0 src/`string-literals.ts`/SomeInterface#c.
//  documentation ```ts\n(property) c: number\n```
  }
  // "Go to definition" does not work for the 'a', 'b' and 'c' string literals
  // below when using tsserver so it's fine that scip-typescript does not emit
  // occurrences here either.
  export type OmitInterface = Omit<SomeInterface, 'a' | 'b'>
//            ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/OmitInterface#
//            documentation ```ts\ntype OmitInterface\n```
//                            ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Omit#
//                                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
  export type PickInterface = Pick<SomeInterface, 'b' | 'c'>
//            ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/PickInterface#
//            documentation ```ts\ntype PickInterface\n```
//                            ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Pick#
//                                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
  
