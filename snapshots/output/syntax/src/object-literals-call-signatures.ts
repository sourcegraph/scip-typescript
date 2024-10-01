// < definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/

import {
  Configuration,
//^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  GenericClass,
//^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
  GenericInterface,
//^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
  Option,
//^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
  Superinterface,
//^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
} from './reusable-types'
//     ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/

export function consumesInterface(superInterface: Superinterface): void {}
//              ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
//                                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().(superInterface)
//                                                ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
export function consumesArray(superInterface: Superinterface[]): void {}
//              ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().
//                            ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().(superInterface)
//                                            ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
export function consumesGenericInterface<T>(
//              ^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                                       ^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().[T]
  genercInterface: GenericInterface<T>
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().(genercInterface)
//                 ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
//                                  ^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().[T]
): void {}

export function infersInterface(): void {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/infersInterface().
  consumesInterface({
//^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
    interfaceMethod: (): string => 'inferred',
//  ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
    property: 'inferred',
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
  })
  consumesArray([
//^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().
    {
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
      property: 'inferred',
//    ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
    },
  ])
  consumesGenericInterface<number>({
//^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
    interfaceMethod: (): string => 'inferred',
//  ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
    property: 123,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
  })
  consumesGenericInterface<Option<Configuration>[]>({
//^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                         ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                                ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    interfaceMethod: (): string => 'inferred',
//  ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
    property: [{ value: { property: 42, property2: '42' } }],
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
//               ^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#value.
//                        ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                                      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  })
}
export function returnStatementInsideArgumentExpression(): Configuration[] {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/returnStatementInsideArgumentExpression().
//                                                         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  if (1 == 1) {
    return [1].map<Configuration>((number: number): Configuration => {
//             ^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                 ^^^^^^ definition local 3
//                                                  ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
      const incremented = number + 1
//          ^^^^^^^^^^^ definition local 6
//                        ^^^^^^ reference local 3
      return {
        property: incremented,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                ^^^^^^^^^^^ reference local 6
        property2: incremented.toString(),
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
//                 ^^^^^^^^^^^ reference local 6
//                             ^^^^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Number#toString().
      }
    })
  } else {
    return [1].map<Configuration>(number => {
//             ^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                ^^^^^^ definition local 10
      const incremented = number + 1
//          ^^^^^^^^^^^ definition local 13
//                        ^^^^^^ reference local 10
      return {
        property: incremented,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                ^^^^^^^^^^^ reference local 13
        property2: incremented.toString(),
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
//                 ^^^^^^^^^^^ reference local 13
//                             ^^^^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Number#toString().
      }
    })
  }
}

export function createGenericClass(): GenericClass<Configuration> {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                                    ^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
//                                                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  return new GenericClass<Configuration>([{ property: 1, property2: '2' }])
//           ^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().
//                        ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                          ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                                                       ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
}

export function handleGenericClass() {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/handleGenericClass().
  return createGenericClass().map(({ property, property2 }) => ({
//       ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                            ^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().
//                                   ^^^^^^^^ definition local 19
//                                   ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                                             ^^^^^^^^^ definition local 20
//                                             ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
    property: property + 1,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//            ^^^^^^^^ reference local 19
    property2: property2 + '1',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
//             ^^^^^^^^^ reference local 20
  }))
}

export function handleShorthand() {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/handleShorthand().
  const property = '42'
//      ^^^^^^^^ definition local 23
  const interfaceMethod = (): string => 'inferred'
//      ^^^^^^^^^^^^^^^ definition local 26
  consumesInterface({
//^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
    interfaceMethod,
//  ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
    property,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
  })
}

