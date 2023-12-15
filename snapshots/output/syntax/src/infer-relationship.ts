// < definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/

interface Configuration {
//        ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  property: number
//^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
}

function random(): number {
//       ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
  return Math.random()
//       ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Math#
//       ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Math.
//       ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.core.d.ts`/Math#
//       ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Math#
//            ^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Math#random().
}
export function returnStatement(): Configuration {
//              ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/returnStatement().
//                                 ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  if (random() > 0) {
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property0:
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
    }
  }
  for (let i = 0; i < 9; i++) {
//         ^ definition local 2
//                ^ reference local 2
//                       ^ reference local 2
    if (random() > i) {
//      ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^ reference local 2
      return {
        property: 41,
//      ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property1:
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  }
  for (const i of [1, 2, 3]) {
//           ^ definition local 5
    if (random() > i) {
//      ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^ reference local 5
      return {
        property: 41,
//      ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property2:
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  }
  for (const i in { '1': 2 }) {
//           ^ definition local 8
//                  ^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/`'1'0`:
    if (random() > Number.parseInt(i)) {
//      ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
//                 ^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Number.
//                 ^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2020.number.d.ts`/Number#
//                        ^^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.core.d.ts`/NumberConstructor#parseInt().
//                                 ^ reference local 8
      return {
        property: 41,
//      ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property3:
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  }
  while (random() < 0) {
//       ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property4:
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
    }
  }
  do {
    if (random() > 0) {
//      ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property5:
//      relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
      }
    }
  } while (random() < 0)
//         ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/random().

  return {
    property: 42,
//  ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property6:
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
  }
}

export function returnStatementInsideArgumentExpression(): Configuration[] {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/returnStatementInsideArgumentExpression().
//                                                         ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
  return [1].map<Configuration>(number => {
//           ^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//               ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//                              ^^^^^^ definition local 12
    const incremented = number + 1
//        ^^^^^^^^^^^ definition local 15
//                      ^^^^^^ reference local 12
    return {
      property: incremented,
//    ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/property7:
//              ^^^^^^^^^^^ reference local 15
    }
  })
}

