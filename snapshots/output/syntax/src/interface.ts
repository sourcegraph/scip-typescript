  export interface Interface {
//                 ^^^^^^^^^ definition example 1.0.0 src/interface.ts/Interface#
    property: string
//  ^^^^^^^^ definition example 1.0.0 src/interface.ts/Interface#property.
    methodSignature(param: string): string
//  ^^^^^^^^^^^^^^^ definition example 1.0.0 src/interface.ts/Interface#methodSignature().
//                  ^^^^^ definition example 1.0.0 src/interface.ts/Interface#methodSignature().(param)
    methodSignature2: (param: string) => string
//  ^^^^^^^^^^^^^^^^ definition example 1.0.0 src/interface.ts/Interface#methodSignature2.
//                     ^^^^^ definition local 1
  }
  
  export function newInterface(): Interface {
//                ^^^^^^^^^^^^ definition example 1.0.0 src/interface.ts/newInterface().
//                                ^^^^^^^^^ reference example 1.0.0 src/interface.ts/Interface#
    return {
      property: 'a',
//    ^^^^^^^^ definition example 1.0.0 src/interface.ts/property0:
      methodSignature(param: string): string {
//    ^^^^^^^^^^^^^^^ definition local 4
//                    ^^^^^ definition local 5
        return param
//             ^^^^^ reference local 5
      },
      methodSignature2: (param: string): string => {
//    ^^^^^^^^^^^^^^^^ definition example 1.0.0 src/interface.ts/methodSignature20:
//                       ^^^^^ definition local 7
        return param
//             ^^^^^ reference local 7
      },
    }
  }
  
