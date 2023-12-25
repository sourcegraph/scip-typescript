// < definition syntax 1.0.0 src/`constructor.ts`/

namespace Yay {
//        ^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/
  export class SuperConstructor {
//             ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
    constructor(public readonly property: number) {}
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
//                              ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().(property)
  }

  export namespace Woo {
//                 ^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
    export class MyClass {
//               ^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
      constructor() {}
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
    }
  }
}

export class SuperConstructor2 {
//           ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
  constructor(public readonly property: number) {}
//^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
//                            ^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().(property)
}

export function useConstructor(): Yay.SuperConstructor {
//              ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor().
//                                ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                                    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
  return new Yay.SuperConstructor(10)
//           ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//               ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
}

export function useConstructor2(): SuperConstructor2 {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor2().
//                                 ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
  return new SuperConstructor2(10)
//           ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
}

export function useConstructor3(): Yay.Woo.MyClass {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useConstructor3().
//                                 ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//                                     ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                                         ^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
  return new Yay.Woo.MyClass()
//           ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/
//               ^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                   ^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
}

export class NoConstructor {
//           ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/NoConstructor#
  property: number
//^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/NoConstructor#property.
}

export function useNoConstructor() {
//              ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`constructor.ts`/useNoConstructor().
  return new NoConstructor()
//           ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`constructor.ts`/NoConstructor#
}

