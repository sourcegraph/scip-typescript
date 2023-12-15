// < definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/

namespace Yay {
//        ^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/
  export class SuperConstructor {
//             ^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
    constructor(public readonly property: number) {}
//  ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
//                              ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().(property)
  }

  export namespace Woo {
//                 ^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
    export class MyClass {
//               ^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
      constructor() {}
//    ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
    }
  }
}

export class SuperConstructor2 {
//           ^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
  constructor(public readonly property: number) {}
//^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
//                            ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().(property)
}

export function useConstructor(): Yay.SuperConstructor {
//              ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/useConstructor().
//                                ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/
//                                    ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#
  return new Yay.SuperConstructor(10)
//           ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/
//               ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/SuperConstructor#`<constructor>`().
}

export function useConstructor2(): SuperConstructor2 {
//              ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/useConstructor2().
//                                 ^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#
  return new SuperConstructor2(10)
//           ^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/SuperConstructor2#`<constructor>`().
}

export function useConstructor3(): Yay.Woo.MyClass {
//              ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/useConstructor3().
//                                 ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/
//                                     ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                                         ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#
  return new Yay.Woo.MyClass()
//           ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/
//               ^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/
//                   ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/Yay/Woo/MyClass#`<constructor>`().
}

export class NoConstructor {
//           ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/NoConstructor#
  property: number
//^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/NoConstructor#property.
}

export function useNoConstructor() {
//              ^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`constructor.ts`/useNoConstructor().
  return new NoConstructor()
//           ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`constructor.ts`/NoConstructor#
}

