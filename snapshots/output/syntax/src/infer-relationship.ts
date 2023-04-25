  interface Configuration {
// definition syntax 1.0.0 src/`infer-relationship.ts`/
//documentation ```ts\nmodule "infer-relationship.ts"\n```
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//          documentation ```ts\ninterface Configuration\n```
    property: number
//  ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
//  documentation ```ts\n(property) property: number\n```
  }
  
  function random(): number {
//         ^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/random().
//         documentation ```ts\nfunction random(): number\n```
    return Math.random()
//         ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math#
//         ^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math.
//         ^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/Math#
//         ^^^^ reference typescript 4.8.4 lib/`lib.es2015.symbol.wellknown.d.ts`/Math#
//              ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Math#random().
  }
  export function returnStatement(): Configuration {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatement().
//                documentation ```ts\nfunction returnStatement(): Configuration\n```
//                                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
    if (random() > 0) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property0:
//      documentation ```ts\n(property) property: number\n```
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
    for (let i = 0; i < 9; i++) {
//           ^ definition local 2
//           documentation ```ts\nvar i: number\n```
//                  ^ reference local 2
//                         ^ reference local 2
      if (random() > i) {
//        ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                   ^ reference local 2
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property1:
//        documentation ```ts\n(property) property: number\n```
//        relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
        }
      }
    }
    for (const i of [1, 2, 3]) {
//             ^ definition local 5
//             documentation ```ts\nvar i: number\n```
      if (random() > i) {
//        ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                   ^ reference local 5
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property2:
//        documentation ```ts\n(property) property: number\n```
//        relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
        }
      }
    }
    for (const i in { '1': 2 }) {
//             ^ definition local 8
//             documentation ```ts\nvar i: string\n```
//                    ^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/`'1'0`:
//                    documentation ```ts\n(property) '1': number\n```
      if (random() > Number.parseInt(i)) {
//        ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number.
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Number#
//                   ^^^^^^ reference typescript 4.8.4 lib/`lib.es2020.number.d.ts`/Number#
//                          ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/NumberConstructor#parseInt().
//                                   ^ reference local 8
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property3:
//        documentation ```ts\n(property) property: number\n```
//        relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
        }
      }
    }
    while (random() < 0) {
//         ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property4:
//      documentation ```ts\n(property) property: number\n```
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
    do {
      if (random() > 0) {
//        ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
        return {
          property: 41,
//        ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property5:
//        documentation ```ts\n(property) property: number\n```
//        relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
        }
      }
    } while (random() < 0)
//           ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
  
    return {
      property: 42,
//    ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property6:
//    documentation ```ts\n(property) property: number\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
    }
  }
  
  export function returnStatementInsideArgumentExpression(): Configuration[] {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatementInsideArgumentExpression().
//                documentation ```ts\nfunction returnStatementInsideArgumentExpression(): Configuration[]\n```
//                                                           ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
    return [1].map<Configuration>(number => {
//             ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//                                ^^^^^^ definition local 12
//                                documentation ```ts\n(parameter) number: number\n```
      const incremented = number + 1
//          ^^^^^^^^^^^ definition local 15
//          documentation ```ts\nvar incremented: number\n```
//                        ^^^^^^ reference local 12
      return {
        property: incremented,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property7:
//      documentation ```ts\n(property) property: number\n```
//                ^^^^^^^^^^^ reference local 15
      }
    })
  }
  
