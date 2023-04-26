  namespace Yay {
// definition syntax 1.0.0 src/`constructor.ts`/
//documentation ```ts\nmodule "constructor.ts"\n```
//          ^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/
//          documentation ```ts\nYay: typeof Yay\n```
    export class SuperConstructor {
//               ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
//               documentation ```ts\nclass SuperConstructor\n```
      constructor(public readonly property: number) {}
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
//    documentation ```ts\nconstructor(property: number): SuperConstructor\n```
//                                ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().(property)
//                                documentation ```ts\n(property) property: number\n```
    }
  
    export namespace Woo {
//                   ^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                   documentation ```ts\nWoo: typeof Woo\n```
      export class MyClass {
//                 ^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
//                 documentation ```ts\nclass MyClass\n```
        constructor() {}
//      ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
//      documentation ```ts\nconstructor(): MyClass\n```
      }
    }
  }
  
  export class SuperConstructor2 {
//             ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
//             documentation ```ts\nclass SuperConstructor2\n```
    constructor(public readonly property: number) {}
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
//  documentation ```ts\nconstructor(property: number): SuperConstructor2\n```
//                              ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().(property)
//                              documentation ```ts\n(property) property: number\n```
  }
  
  export function useConstructor(): Yay.SuperConstructor {
//                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor().
//                documentation ```ts\nfunction useConstructor(): SuperConstructor\n```
//                                  ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                                      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
    return new Yay.SuperConstructor(10)
//             ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                 ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
  }
  
  export function useConstructor2(): SuperConstructor2 {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor2().
//                documentation ```ts\nfunction useConstructor2(): SuperConstructor2\n```
//                                   ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
    return new SuperConstructor2(10)
//             ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
  }
  
  export function useConstructor3(): Yay.Woo.MyClass {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor3().
//                documentation ```ts\nfunction useConstructor3(): MyClass\n```
//                                   ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                                       ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                                           ^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
    return new Yay.Woo.MyClass()
//             ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                 ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                     ^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
  }
  
  export class NoConstructor {
//             ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/NoConstructor#
//             documentation ```ts\nclass NoConstructor\n```
    property: number
//  ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/NoConstructor#property.
//  documentation ```ts\n(property) property: number\n```
  }
  
  export function useNoConstructor() {
//                ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useNoConstructor().
//                documentation ```ts\nfunction useNoConstructor(): NoConstructor\n```
    return new NoConstructor()
//             ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/NoConstructor#
  }
  
