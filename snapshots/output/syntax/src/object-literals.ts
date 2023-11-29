  import { Configuration } from './reusable-types'
// definition syntax 1.0.0 src/`object-literals.ts`/
//documentation ```ts\nmodule "object-literals.ts"\n```
//         ^^^^^^^^^^^^^ reference local 0
  
  function random(): number {
//         ^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/random().
//         documentation ```ts\nfunction random(): number\n```
    return Math.random()
//         ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math#
//         ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math.
//         ^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/Math#
//         ^^^^ reference typescript 4.8.4 lib/`lib.es2015.symbol.wellknown.d.ts`/Math#
//              ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math#random().
  }
  
  export function handleArrayLiteral(): Configuration[] {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/handleArrayLiteral().
//                documentation ```ts\nfunction handleArrayLiteral(): Configuration[]\n```
//                                      ^^^^^^^^^^^^^ reference local 0
    return [
      {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property0:
//      documentation ```ts\n(property) property: number\n```
        property2: '41',
//      ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property20:
//      documentation ```ts\n(property) property2: string\n```
      },
    ]
  }
  
  export function returnStatement(): Configuration {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/returnStatement().
//                documentation ```ts\nfunction returnStatement(): Configuration\n```
//                                   ^^^^^^^^^^^^^ reference local 0
    if (random() > 0) {
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property1:
//      documentation ```ts\n(property) property: number\n```
        property2: '41',
//      ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property21:
//      documentation ```ts\n(property) property2: string\n```
      }
    }
    for (let i = 0; i < 9; i++) {
//           ^ definition local 3
//           documentation ```ts\nvar i: number\n```
//                  ^ reference local 3
//                         ^ reference local 3
      if (random() > i) {
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                   ^ reference local 3
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property2:
//        documentation ```ts\n(property) property: number\n```
          property2: '41',
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property22:
//        documentation ```ts\n(property) property2: string\n```
        }
      }
    }
    for (const i of [1, 2, 3]) {
//             ^ definition local 6
//             documentation ```ts\nvar i: number\n```
      if (random() > i) {
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                   ^ reference local 6
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property3:
//        documentation ```ts\n(property) property: number\n```
          property2: '41',
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property23:
//        documentation ```ts\n(property) property2: string\n```
        }
      }
    }
    for (const i in { '1': 2 }) {
//             ^ definition local 9
//             documentation ```ts\nvar i: string\n```
//                    ^^^ definition syntax 1.0.0 src/`object-literals.ts`/`'1'0`:
//                    documentation ```ts\n(property) '1': number\n```
      if (random() > Number.parseInt(i)) {
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number.
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es2020.number.d.ts`/Number#
//                          ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/NumberConstructor#parseInt().
//                                   ^ reference local 9
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property4:
//        documentation ```ts\n(property) property: number\n```
          property2: '41',
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property24:
//        documentation ```ts\n(property) property2: string\n```
        }
      }
    }
    while (random() < 0) {
//         ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property5:
//      documentation ```ts\n(property) property: number\n```
        property2: '41',
//      ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property25:
//      documentation ```ts\n(property) property2: string\n```
      }
    }
    do {
      if (random() > 0) {
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property6:
//        documentation ```ts\n(property) property: number\n```
          property2: '41',
//        ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property26:
//        documentation ```ts\n(property) property2: string\n```
        }
      }
    } while (random() < 0)
//           ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
  
    return {
      property: 42,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property7:
//    documentation ```ts\n(property) property: number\n```
      property2: '41',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property27:
//    documentation ```ts\n(property) property2: string\n```
    }
  }
  
  export function constDeclaration(): number[] {
//                ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/constDeclaration().
//                documentation ```ts\nfunction constDeclaration(): number[]\n```
    var configuration1: Configuration = {
//      ^^^^^^^^^^^^^^ definition local 12
//      documentation ```ts\nvar configuration1: Configuration\n```
//                      ^^^^^^^^^^^^^ reference local 0
      property: 1,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property8:
//    documentation ```ts\n(property) property: number\n```
      property2: '1',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property28:
//    documentation ```ts\n(property) property2: string\n```
    }
    configuration1 = {
//  ^^^^^^^^^^^^^^ reference local 12
      property: 2,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property9:
//    documentation ```ts\n(property) property: number\n```
      property2: '2',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property29:
//    documentation ```ts\n(property) property2: string\n```
    }
    let configuration2: Configuration = {
//      ^^^^^^^^^^^^^^ definition local 15
//      documentation ```ts\nvar configuration2: Configuration\n```
//                      ^^^^^^^^^^^^^ reference local 0
      property: 3,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property10:
//    documentation ```ts\n(property) property: number\n```
      property2: '3',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property210:
//    documentation ```ts\n(property) property2: string\n```
    }
    configuration2.property = configuration1.property
//  ^^^^^^^^^^^^^^ reference local 15
//                            ^^^^^^^^^^^^^^ reference local 12
    const configuration3: Configuration = {
//        ^^^^^^^^^^^^^^ definition local 18
//        documentation ```ts\nvar configuration3: Configuration\n```
//                        ^^^^^^^^^^^^^ reference local 0
      property: 4,
//    ^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property11:
//    documentation ```ts\n(property) property: number\n```
      property2: '4',
//    ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/property211:
//    documentation ```ts\n(property) property2: string\n```
    }
    return [
      configuration1.property,
//    ^^^^^^^^^^^^^^ reference local 12
      configuration2.property,
//    ^^^^^^^^^^^^^^ reference local 15
      configuration3.property,
//    ^^^^^^^^^^^^^^ reference local 18
    ]
  }
  
