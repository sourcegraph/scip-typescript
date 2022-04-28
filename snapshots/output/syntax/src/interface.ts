  export interface Interface {
//                 ^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#
//                 documentation ```ts\nInterface\n```
//                 documentation 
    property: string
//  ^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#property.
//  documentation ```ts\nstring\n```
//  documentation 
    methodSignature(param: string): string
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//  documentation ```ts\n(param: string) => string\n```
//  documentation 
//                  ^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().(param)
//                  documentation ```ts\nstring\n```
//                  documentation 
    methodSignature2: (param: string) => string
//  ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//  documentation ```ts\n(param: string) => string\n```
//  documentation 
//                     ^^^^^ definition local 1
//                     documentation ```ts\nstring\n```
//                     documentation 
  }
  
  export function newInterface(): Interface {
//                ^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/newInterface().
//                documentation ```ts\n() => Interface\n```
//                documentation 
//                                ^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#
    return {
      property: 'a',
//    ^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/property0:
//    documentation ```ts\nstring\n```
//    documentation 
      methodSignature(param: string): string {
//    ^^^^^^^^^^^^^^^ definition local 4
//    documentation ```ts\n(param: string) => string\n```
//    documentation 
//                    ^^^^^ definition local 5
//                    documentation ```ts\nstring\n```
//                    documentation 
        return param
//             ^^^^^ reference local 5
      },
      methodSignature2: (param: string): string => {
//    ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/methodSignature20:
//    documentation ```ts\n(param: string) => string\n```
//    documentation 
//                       ^^^^^ definition local 7
//                       documentation ```ts\nstring\n```
//                       documentation 
        return param
//             ^^^^^ reference local 7
      },
    }
  }
  
