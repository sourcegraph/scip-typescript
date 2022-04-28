  export class Class {
//             ^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#
//             documentation ```ts\nclass Class\n```
    public classProperty: string
//         ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#classProperty.
//         documentation ```ts\n(property) classProperty: string\n```
    constructor(constructorParam: string) {
//              ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
//              documentation ```ts\n(parameter) constructorParam: string\n```
      this.classProperty = constructorParam
//         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#classProperty.
//                         ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().(constructorParam)
    }
    public method(methodParam: string): string {
//         ^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#method().
//         documentation ```ts\n(method) method(methodParam: string): string\n```
//                ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
//                documentation ```ts\n(parameter) methodParam: string\n```
      return this.privateMethod(methodParam)
//                ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//                              ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#method().(methodParam)
    }
    public static staticMethod(methodParam: string): string {
//                ^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                documentation ```ts\n(method) staticMethod(methodParam: string): string\n```
//                             ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
//                             documentation ```ts\n(parameter) methodParam: string\n```
      return methodParam
//           ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#staticMethod().(methodParam)
    }
    private privateMethod(methodParam: string): string {
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#privateMethod().
//          documentation ```ts\n(method) privateMethod(methodParam: string): string\n```
//                        ^^^^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
//                        documentation ```ts\n(parameter) methodParam: string\n```
      return methodParam
//           ^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#privateMethod().(methodParam)
    }
  }
  
  export function newClass(param: string): string {
//                ^^^^^^^^ definition syntax 1.0.0 src/`class.ts`/newClass().
//                documentation ```ts\nfunction newClass(param: string): string\n```
//                         ^^^^^ definition syntax 1.0.0 src/`class.ts`/newClass().(param)
//                         documentation ```ts\n(parameter) param: string\n```
    const instance = new Class(param).classProperty
//        ^^^^^^^^ definition local 2
//        documentation ```ts\nvar instance: string\n```
//                       ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
//                             ^^^^^ reference syntax 1.0.0 src/`class.ts`/newClass().(param)
//                                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#classProperty.
    const instance2 = Class.staticMethod(param)
//        ^^^^^^^^^ definition local 5
//        documentation ```ts\nvar instance2: string\n```
//                    ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
//                          ^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#staticMethod().
//                                       ^^^^^ reference syntax 1.0.0 src/`class.ts`/newClass().(param)
    return instance + instance2
//         ^^^^^^^^ reference local 2
//                    ^^^^^^^^^ reference local 5
  }
  
