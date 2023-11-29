  import {
// definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/
//documentation ```ts\nmodule "object-literals-call-signatures.ts"\n```
    Configuration,
//  ^^^^^^^^^^^^^ reference local 0
    GenericClass,
//  ^^^^^^^^^^^^ reference local 1
    GenericInterface,
//  ^^^^^^^^^^^^^^^^ reference local 2
    Option,
//  ^^^^^^ reference local 3
    Superinterface,
//  ^^^^^^^^^^^^^^ reference local 4
  } from './reusable-types'
  
  export function consumesInterface(superInterface: Superinterface): void {}
//                ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
//                documentation ```ts\nfunction consumesInterface(superInterface: Superinterface): void\n```
//                                  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().(superInterface)
//                                  documentation ```ts\n(parameter) superInterface: Superinterface\n```
//                                                  ^^^^^^^^^^^^^^ reference local 4
  export function consumesArray(superInterface: Superinterface[]): void {}
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().
//                documentation ```ts\nfunction consumesArray(superInterface: Superinterface[]): void\n```
//                              ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesArray().(superInterface)
//                              documentation ```ts\n(parameter) superInterface: Superinterface[]\n```
//                                              ^^^^^^^^^^^^^^ reference local 4
  export function consumesGenericInterface<T>(
//                ^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                documentation ```ts\nfunction consumesGenericInterface<T>(genercInterface: GenericInterface<T>): void\n```
//                                         ^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().[T]
//                                         documentation ```ts\nT: T\n```
    genercInterface: GenericInterface<T>
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().(genercInterface)
//  documentation ```ts\n(parameter) genercInterface: GenericInterface<T>\n```
//                   ^^^^^^^^^^^^^^^^ reference local 2
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
      property: 'inferred',
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property0:
//    documentation ```ts\n(property) property: string\n```
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
      property: 123,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property2:
//    documentation ```ts\n(property) property: number\n```
    })
    consumesGenericInterface<Option<Configuration>[]>({
//  ^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesGenericInterface().
//                           ^^^^^^ reference local 3
//                                  ^^^^^^^^^^^^^ reference local 0
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod3:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
      property: [{ value: { property: 42, property2: '42' } }],
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property3:
//    documentation ```ts\n(property) property: { value: { property: number; property2: string; }; }[]\n```
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
//                                                           ^^^^^^^^^^^^^ reference local 0
    if (1 == 1) {
      return [1].map<Configuration>((number: number): Configuration => {
//               ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                   ^^^^^^^^^^^^^ reference local 0
//                                   ^^^^^^ definition local 8
//                                   documentation ```ts\n(parameter) number: number\n```
//                                                    ^^^^^^^^^^^^^ reference local 0
        const incremented = number + 1
//            ^^^^^^^^^^^ definition local 11
//            documentation ```ts\nvar incremented: number\n```
//                          ^^^^^^ reference local 8
        return {
          property: incremented,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property5:
//        documentation ```ts\n(property) property: number\n```
//                  ^^^^^^^^^^^ reference local 11
          property2: incremented.toString(),
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property21:
//        documentation ```ts\n(property) property2: string\n```
//                   ^^^^^^^^^^^ reference local 11
//                               ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#toString().
        }
      })
    } else {
      return [1].map<Configuration>(number => {
//               ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                   ^^^^^^^^^^^^^ reference local 0
//                                  ^^^^^^ definition local 15
//                                  documentation ```ts\n(parameter) number: number\n```
        const incremented = number + 1
//            ^^^^^^^^^^^ definition local 18
//            documentation ```ts\nvar incremented: number\n```
//                          ^^^^^^ reference local 15
        return {
          property: incremented,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property6:
//        documentation ```ts\n(property) property: number\n```
//                  ^^^^^^^^^^^ reference local 18
          property2: incremented.toString(),
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property22:
//        documentation ```ts\n(property) property2: string\n```
//                   ^^^^^^^^^^^ reference local 18
//                               ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#toString().
        }
      })
    }
  }
  
  export function createGenericClass(): GenericClass<Configuration> {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                documentation ```ts\nfunction createGenericClass(): GenericClass<Configuration>\n```
//                                      ^^^^^^^^^^^^ reference local 1
//                                                   ^^^^^^^^^^^^^ reference local 0
    return new GenericClass<Configuration>([{ property: 1, property2: '2' }])
//             ^^^^^^^^^^^^ reference local 1
//                          ^^^^^^^^^^^^^ reference local 0
//                                            ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property7:
//                                            documentation ```ts\n(property) property: number\n```
//                                                         ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property23:
//                                                         documentation ```ts\n(property) property2: string\n```
  }
  
  export function handleGenericClass() {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/handleGenericClass().
//                documentation ```ts\nfunction handleGenericClass(): any\n```
    return createGenericClass().map(({ property, property2 }) => ({
//         ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/createGenericClass().
//                                     ^^^^^^^^ definition local 24
//                                     documentation ```ts\n(parameter) property: any\n```
//                                               ^^^^^^^^^ definition local 25
//                                               documentation ```ts\n(parameter) property2: any\n```
      property: property + 1,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property8:
//    documentation ```ts\n(property) property: any\n```
//              ^^^^^^^^ reference local 24
      property2: property2 + '1',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property24:
//    documentation ```ts\n(property) property2: string\n```
//               ^^^^^^^^^ reference local 25
    }))
  }
  
  export function handleShorthand() {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/handleShorthand().
//                documentation ```ts\nfunction handleShorthand(): void\n```
    const property = '42'
//        ^^^^^^^^ definition local 28
//        documentation ```ts\nvar property: "42"\n```
    const interfaceMethod = (): string => 'inferred'
//        ^^^^^^^^^^^^^^^ definition local 31
//        documentation ```ts\nvar interfaceMethod: () => string\n```
    consumesInterface({
//  ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-call-signatures.ts`/consumesInterface().
      interfaceMethod,
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/interfaceMethod4:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
//    ^^^^^^^^^^^^^^^ reference local 31
      property,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals-call-signatures.ts`/property9:
//    documentation ```ts\n(property) property: string\n```
//    ^^^^^^^^ reference local 28
    })
  }
  
