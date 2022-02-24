  export class Class {
//             ^^^^^ reference example 1.0.0 src/`class.ts`/Class#
    public classProperty: string
//         ^^^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#classProperty.
    constructor(constructorParam: string) {
//              ^^^^^^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
      this.classProperty = constructorParam
//         ^^^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#classProperty.
//                         ^^^^^^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
    }
    public method(methodParam: string): string {
//         ^^^^^^ definition example 1.0.0 src/`class.ts`/Class#method().
//                ^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#method().(methodParam)
      return this.privateMethod(methodParam)
//                ^^^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#privateMethod().
//                              ^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#method().(methodParam)
    }
    public static staticMethod(methodParam: string): string {
//                ^^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#staticMethod().
//                             ^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
      return methodParam
//           ^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
    }
    private privateMethod(methodParam: string): string {
//          ^^^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#privateMethod().
//                        ^^^^^^^^^^^ definition example 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
      return methodParam
//           ^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
    }
  }
  
  export function newClass(param: string): string {
//                ^^^^^^^^ definition example 1.0.0 src/`class.ts`/newClass().
//                         ^^^^^ definition example 1.0.0 src/`class.ts`/newClass().(param)
    const instance = new Class(param).classProperty
//        ^^^^^^^^ definition local 2
//                       ^^^^^ reference example 1.0.0 src/`class.ts`/Class#
//                             ^^^^^ reference example 1.0.0 src/`class.ts`/newClass().(param)
//                                    ^^^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#classProperty.
    const instance2 = Class.staticMethod(param)
//        ^^^^^^^^^ definition local 5
//                    ^^^^^ reference example 1.0.0 src/`class.ts`/Class#
//                          ^^^^^^^^^^^^ reference example 1.0.0 src/`class.ts`/Class#staticMethod().
//                                       ^^^^^ reference example 1.0.0 src/`class.ts`/newClass().(param)
    return instance + instance2
//         ^^^^^^^^ reference local 2
//                    ^^^^^^^^^ reference local 5
  }
  
