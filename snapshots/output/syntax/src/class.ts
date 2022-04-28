  export class Class {
//             ^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#
//             documentation ```ts\nClass\n```
//             documentation 
    public classProperty: string
//         ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#classProperty.
//         documentation ```ts\nstring\n```
//         documentation 
    constructor(constructorParam: string) {
//              ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
//              documentation ```ts\nstring\n```
//              documentation 
      this.classProperty = constructorParam
//         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#classProperty.
//                         ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
    }
    public method(methodParam: string): string {
//         ^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#method().
//         documentation ```ts\n(methodParam: string) => string\n```
//         documentation 
//                ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
//                documentation ```ts\nstring\n```
//                documentation 
      return this.privateMethod(methodParam)
//                ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//                              ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
    }
    public static staticMethod(methodParam: string): string {
//                ^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                documentation ```ts\n(methodParam: string) => string\n```
//                documentation 
//                             ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
//                             documentation ```ts\nstring\n```
//                             documentation 
      return methodParam
//           ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
    }
    private privateMethod(methodParam: string): string {
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//          documentation ```ts\n(methodParam: string) => string\n```
//          documentation 
//                        ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
//                        documentation ```ts\nstring\n```
//                        documentation 
      return methodParam
//           ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
    }
  }
  
  export function newClass(param: string): string {
//                ^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/newClass().
//                documentation ```ts\n(param: string) => string\n```
//                documentation 
//                         ^^^^^ definition syntax 1.0.0 src/`class.ts`/newClass().(param)
//                         documentation ```ts\nstring\n```
//                         documentation 
    const instance = new Class(param).classProperty
//        ^^^^^^^^ definition local 2
//        documentation ```ts\nstring\n```
//        documentation 
//                       ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
//                             ^^^^^ reference syntax 1.0.0 src/`class.ts`/newClass().(param)
//                                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#classProperty.
    const instance2 = Class.staticMethod(param)
//        ^^^^^^^^^ definition local 5
//        documentation ```ts\nstring\n```
//        documentation 
//                    ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
//                          ^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                                       ^^^^^ reference syntax 1.0.0 src/`class.ts`/newClass().(param)
    return instance + instance2
//         ^^^^^^^^ reference local 2
//                    ^^^^^^^^^ reference local 5
  }
  
