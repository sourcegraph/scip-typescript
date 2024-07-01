// < definition syntax 1.0.0 src/`infer-relationship.ts`/

interface Configuration {
//        ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  property: number
//^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property0:
}

function random(): number {
//       ^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/random().
  return Math.random()
//       ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Math#
//       ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Math.
//       ^^^^ reference typescript 5.3.3 lib/`lib.es2015.core.d.ts`/Math#
//       ^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Math#
//            ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Math#random().
}
export function returnStatement(): Configuration {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatement().
//                                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  if (random() > 0) {
//    ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property1:
//    relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
    }
  }
  for (let i = 0; i < 9; i++) {
//         ^ definition local 2
//                ^ reference local 2
//                       ^ reference local 2
    if (random() > i) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^ reference local 2
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property2:
//      relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
      }
    }
  }
  for (const i of [1, 2, 3]) {
//           ^ definition local 5
    if (random() > i) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^ reference local 5
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property3:
//      relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
      }
    }
  }
  for (const i in { '1': 2 }) {
//           ^ definition local 8
//                  ^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/10:
    if (random() > Number.parseInt(i)) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Number.
//                 ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference typescript 5.3.3 lib/`lib.es2020.number.d.ts`/Number#
//                        ^^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.core.d.ts`/NumberConstructor#parseInt().
//                                 ^ reference local 8
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property4:
//      relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
      }
    }
  }
  while (random() < 0) {
//       ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property5:
//    relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
    }
  }
  do {
    if (random() > 0) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property6:
//      relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
      }
    }
  } while (random() < 0)
//         ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().

  return {
    property: 42,
//  ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property7:
//  relationship implementation reference syntax 1.0.0 src/`infer-relationship.ts`/property0:
  }
}

export function returnStatementInsideArgumentExpression(): Configuration[] {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatementInsideArgumentExpression().
//                                                         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  return [1].map<Configuration>(number => {
//           ^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//               ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//                              ^^^^^^ definition local 14
    const incremented = number + 1
//        ^^^^^^^^^^^ definition local 17
//                      ^^^^^^ reference local 14
    return {
      property: incremented,
//    ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property8:
//              ^^^^^^^^^^^ reference local 17
    }
  })
}

