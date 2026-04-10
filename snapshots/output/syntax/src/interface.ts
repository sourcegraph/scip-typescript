// < definition syntax 1.0.0 src/`interface.ts`/

export interface Interface {
//               ^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#
  property: string
//^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#property.
  methodSignature(param: string): string
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//                ^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().(param)
  methodSignature2: (param: string) => string
//^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//                   ^^^^^ definition local 0
}

export function newInterface(): Interface {
//              ^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/newInterface().
//                              ^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#
  return {
    property: 'a',
//  ^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#property.
    methodSignature(param: string): string {
//  ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//                  ^^^^^ definition local 4
      return param
//           ^^^^^ reference local 4
    },
    methodSignature2: (param: string): string => {
//  ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//                     ^^^^^ definition local 5
      return param
//           ^^^^^ reference local 5
    },
  }
}

