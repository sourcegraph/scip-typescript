  export class Constructor {
// definition syntax 1.0.0 src/`constructor.ts`/
//documentation ```ts\nmodule "constructor.ts"\n```
//             ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Constructor#
//             documentation ```ts\nclass Constructor\n```
    constructor(public readonly property: number) {}
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Constructor#`<constructor>`().
//  documentation ```ts\nconstructor(property: number): Constructor\n```
//  relationship scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Constructor#`<constructor>`().
//                              ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Constructor#`<constructor>`().(property)
//                              documentation ```ts\n(property) property: number\n```
  }
  
  export function useConstructor(): Constructor {
//                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor().
//                documentation ```ts\nfunction useConstructor(): Constructor\n```
//                                  ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#
    return new Constructor(Constructor.name.length)
//             ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#`<constructor>`().
//                         ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#
//                                     ^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/Function#name.
//                                          ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/String#length.
  }
  
