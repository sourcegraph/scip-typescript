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
//                   ^^^^^ definition local 1
}

export function newInterface(): Interface {
//              ^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/newInterface().
//                              ^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#
  return {
    property: 'a',
//  ^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/property0:
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/Interface#property.
    methodSignature(param: string): string {
//  ^^^^^^^^^^^^^^^ definition local 4
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
//                  ^^^^^ definition local 5
      return param
//           ^^^^^ reference local 5
    },
    methodSignature2: (param: string): string => {
//  ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`interface.ts`/methodSignature20:
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/Interface#methodSignature2.
//                     ^^^^^ definition local 7
      return param
//           ^^^^^ reference local 7
    },
  }
}

