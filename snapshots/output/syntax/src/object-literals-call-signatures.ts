  import {
// definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/
//documentation ```ts\nmodule "object-literals-call-signatures.ts"\n```
    Configuration,
//  ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    GenericClass,
//  ^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
    GenericInterface,
//  ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
    Option,
//  ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
    Superinterface,
//  ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
  } from './reusable-types'
//       ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/
  
  export function consumesInterface(superInterface: Superinterface): void {}
//                ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
//                documentation ```ts\nfunction consumesInterface(superInterface: Superinterface): void\n```
//                                  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().(superInterface)
//                                  documentation ```ts\n(parameter) superInterface: Superinterface\n```
//                                                  ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
  export function consumesArray(superInterface: Superinterface[]): void {}
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().
//                documentation ```ts\nfunction consumesArray(superInterface: Superinterface[]): void\n```
//                              ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().(superInterface)
//                              documentation ```ts\n(parameter) superInterface: Superinterface[]\n```
//                                              ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
  export function consumesGenericInterface<T>(
//                ^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                documentation ```ts\nfunction consumesGenericInterface<T>(genercInterface: GenericInterface<T>): void\n```
//                                         ^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().[T]
//                                         documentation ```ts\nT: T\n```
    genercInterface: GenericInterface<T>
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().(genercInterface)
//  documentation ```ts\n(parameter) genercInterface: GenericInterface<T>\n```
//                   ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
//                                    ^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().[T]
  ): void {}
  
  export function infersInterface(): void {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/infersInterface().
//                documentation ```ts\nfunction infersInterface(): void\n```
    consumesInterface({
//  ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod0:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
      property: 'inferred',
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property0:
//    documentation ```ts\n(property) property: string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
    })
    consumesArray([
//  ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().
      {
        interfaceMethod: (): string => 'inferred',
//      ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod1:
//      documentation ```ts\n(property) interfaceMethod: () => string\n```
        property: 'inferred',
//      ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property1:
//      documentation ```ts\n(property) property: string\n```
      },
    ])
    consumesGenericInterface<number>({
//  ^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod2:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
      property: 123,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property2:
//    documentation ```ts\n(property) property: number\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
    })
    consumesGenericInterface<Option<Configuration>[]>({
//  ^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                           ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                                  ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod3:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
      property: [{ value: { property: 42, property2: '42' } }],
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property3:
//    documentation ```ts\n(property) property: { value: { property: number; property2: string; }; }[]\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
//                 ^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/value0:
//                 documentation ```ts\n(property) value: { property: number; property2: string; }\n```
//                          ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property4:
//                          documentation ```ts\n(property) property: number\n```
//                                        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property20:
//                                        documentation ```ts\n(property) property2: string\n```
    })
  }
  
  export function returnStatementInsideArgumentExpression(): Configuration[] {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/returnStatementInsideArgumentExpression().
//                documentation ```ts\nfunction returnStatementInsideArgumentExpression(): Configuration[]\n```
//                                                           ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    if (1 == 1) {
      return [1].map<Configuration>((number: number): Configuration => {
//               ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                   ^^^^^^ definition local 3
//                                   documentation ```ts\n(parameter) number: number\n```
//                                                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
        const incremented = number + 1
//            ^^^^^^^^^^^ definition local 6
//            documentation ```ts\nvar incremented: number\n```
//                          ^^^^^^ reference local 3
        return {
          property: incremented,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property5:
//        documentation ```ts\n(property) property: number\n```
//                  ^^^^^^^^^^^ reference local 6
          property2: incremented.toString(),
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property21:
//        documentation ```ts\n(property) property2: string\n```
//                   ^^^^^^^^^^^ reference local 6
//                               ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#toString().
        }
      })
    } else {
      return [1].map<Configuration>(number => {
//               ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                  ^^^^^^ definition local 10
//                                  documentation ```ts\n(parameter) number: number\n```
        const incremented = number + 1
//            ^^^^^^^^^^^ definition local 13
//            documentation ```ts\nvar incremented: number\n```
//                          ^^^^^^ reference local 10
        return {
          property: incremented,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property6:
//        documentation ```ts\n(property) property: number\n```
//                  ^^^^^^^^^^^ reference local 13
          property2: incremented.toString(),
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property22:
//        documentation ```ts\n(property) property2: string\n```
//                   ^^^^^^^^^^^ reference local 13
//                               ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#toString().
        }
      })
    }
  }
  
  export function createGenericClass(): GenericClass<Configuration> {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                documentation ```ts\nfunction createGenericClass(): GenericClass<Configuration>\n```
//                                      ^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
//                                                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    return new GenericClass<Configuration>([{ property: 1, property2: '2' }])
//             ^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().
//                          ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                                            ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property7:
//                                            documentation ```ts\n(property) property: number\n```
//                                                         ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property23:
//                                                         documentation ```ts\n(property) property2: string\n```
  }
  
  export function handleGenericClass() {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/handleGenericClass().
//                documentation ```ts\nfunction handleGenericClass(): Configuration[]\n```
    return createGenericClass().map(({ property, property2 }) => ({
//         ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                              ^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().
//                                     ^^^^^^^^ definition local 19
//                                     documentation ```ts\n(parameter) property: number\n```
//                                     ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                                               ^^^^^^^^^ definition local 20
//                                               documentation ```ts\n(parameter) property2: string\n```
//                                               ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
      property: property + 1,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property8:
//    documentation ```ts\n(property) property: number\n```
//              ^^^^^^^^ reference local 19
      property2: property2 + '1',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property24:
//    documentation ```ts\n(property) property2: string\n```
//               ^^^^^^^^^ reference local 20
    }))
  }
  
