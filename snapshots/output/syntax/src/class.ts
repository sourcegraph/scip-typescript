// < definition scip-typescript npm syntax 1.0.0 src/`class.ts`/

export class Class {
//           ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#
  public classProperty: string
//       ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#classProperty.
  constructor(constructorParam: string) {
//^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().
//            ^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
    this.classProperty = constructorParam
//       ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#classProperty.
//                       ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
  }
  public method(methodParam: string): string {
//       ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#method().
//              ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
    return this.privateMethod(methodParam)
//              ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//                            ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
  }
  public static staticMethod(methodParam: string): string {
//              ^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                           ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
    return methodParam
//         ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
  }
  private privateMethod(methodParam: string): string {
//        ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//                      ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
    return methodParam
//         ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
  }
}

export function newClass(param: string): string {
//              ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/newClass().
//                       ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`class.ts`/newClass().(param)
  const instance = new Class(param).classProperty
//      ^^^^^^^^ definition local 2
//                     ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().
//                           ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/newClass().(param)
//                                  ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#classProperty.
  const instance2 = Class.staticMethod(param)
//      ^^^^^^^^^ definition local 5
//                  ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#
//                        ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                                     ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/newClass().(param)
  return instance + instance2
//       ^^^^^^^^ reference local 2
//                  ^^^^^^^^^ reference local 5
}

