  export interface Interface {
// definition syntax 1.0.0 src/`interface.ts`/
//documentation ```ts\nmodule "interface.ts"\n```
//                 ^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#
//                 documentation ```ts\ninterface Interface\n```
    property: string
//  ^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#property.
//  documentation ```ts\n(property) property: string\n```
    methodSignature(param: string): string
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//  documentation ```ts\n(method) methodSignature(param: string) => string\n```
//                  ^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().(param)
//                  documentation ```ts\n(parameter) param: string\n```
    methodSignature2: (param: string) => string
//  ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//  documentation ```ts\n(property) methodSignature2: (param: string) => string\n```
//                     ^^^^^ definition local 1
//                     documentation ```ts\n(parameter) param: string\n```
  }
  
  export function newInterface(): Interface {
//                ^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/newInterface().
//                documentation ```ts\nfunction newInterface(): Interface\n```
//                                ^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#
    return {
      property: 'a',
//    ^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#property.
      methodSignature(param: string): string {
//    ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//                    ^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().(param)
//                    documentation ```ts\n(parameter) param: string\n```
        return param
//             ^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().(param)
      },
      methodSignature2: (param: string): string => {
//    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//                       ^^^^^ definition local 3
//                       documentation ```ts\n(parameter) param: string\n```
        return param
//             ^^^^^ reference local 3
      },
    }
  }
  
