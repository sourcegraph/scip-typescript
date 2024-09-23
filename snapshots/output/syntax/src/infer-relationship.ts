// < definition syntax 1.0.0 src/`infer-relationship.ts`/

interface Configuration {
//        ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  property: number
//^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
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
//    ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
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
//      ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
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
//      ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  }
  for (const i in { '1': 2 }) {
//           ^ definition local 8
//                  ^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/`'1'0`:
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
//      ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  }
  while (random() < 0) {
//       ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
    }
  }
  do {
    if (random() > 0) {
//      ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  } while (random() < 0)
//         ^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/random().

  return {
    property: 42,
//  ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
  }
}

export function returnStatementInsideArgumentExpression(): Configuration[] {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatementInsideArgumentExpression().
//                                                         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  return [1].map<Configuration>(number => {
//           ^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//               ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//                              ^^^^^^ definition local 12
    const incremented = number + 1
//        ^^^^^^^^^^^ definition local 15
//                      ^^^^^^ reference local 12
    return {
      property: incremented,
//    ^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
//              ^^^^^^^^^^^ reference local 15
    }
  })
}

