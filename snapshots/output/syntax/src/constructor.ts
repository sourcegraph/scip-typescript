  export class Constructor {
// definition syntax 1.0.0 src/`constructor.ts`/
//documentation ```ts\nmodule "constructor.ts"\n```
//             ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Constructor#
//             documentation ```ts\nclass Constructor\n```
    constructor(public readonly property: number) {}
//  ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#
//                              ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Constructor#`<constructor>`().(property)
//                              documentation ```ts\n(property) property: number\n```
  }
  
  export function useConstructor(): Constructor {
//                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor().
//                documentation ```ts\nfunction useConstructor(): Constructor\n```
//                                  ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#
    return new Constructor(42)
//             ^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Constructor#
  }
  
