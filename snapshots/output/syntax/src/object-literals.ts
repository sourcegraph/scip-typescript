// < definition syntax 1.0.0 src/`object-literals.ts`/

import { Configuration } from './reusable-types'
//       ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                            ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/

function random(): number {
//       ^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/random().
  return Math.random()
//       ^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Math#
//       ^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Math.
//       ^^^^ reference typescript 5.7.3 lib/`lib.es2015.core.d.ts`/Math#
//       ^^^^ reference typescript 5.7.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Math#
//            ^^^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Math#random().
}

export function handleArrayLiteral(): Configuration[] {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/handleArrayLiteral().
//                                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  return [
    {
      property: 41,
//    ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
      property2: '41',
//    ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
    },
  ]
}

export function returnStatement(): Configuration {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/returnStatement().
//                                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  if (random() > 0) {
//    ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
      property2: '41',
//    ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
    }
  }
  for (let i = 0; i < 9; i++) {
//         ^ definition local 2
//                ^ reference local 2
//                       ^ reference local 2
    if (random() > i) {
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                 ^ reference local 2
      return {
        property: 41,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
        property2: '41',
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
      }
    }
  }
  for (const i of [1, 2, 3]) {
//           ^ definition local 5
    if (random() > i) {
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                 ^ reference local 5
      return {
        property: 41,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
        property2: '41',
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
      }
    }
  }
  for (const i in { '1': 2 }) {
//           ^ definition local 8
//                  ^^^ definition syntax 1.0.0 src/`object-literals.ts`/`'1'0`:
    if (random() > Number.parseInt(i)) {
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
//                 ^^^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Number.
//                 ^^^^^^ reference typescript 5.7.3 lib/`lib.es5.d.ts`/Number#
//                 ^^^^^^ reference typescript 5.7.3 lib/`lib.es2020.number.d.ts`/Number#
//                        ^^^^^^^^ reference typescript 5.7.3 lib/`lib.es2015.core.d.ts`/NumberConstructor#parseInt().
//                                 ^ reference local 8
      return {
        property: 41,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
        property2: '41',
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
      }
    }
  }
  while (random() < 0) {
//       ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
    return {
      property: 41,
//    ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
      property2: '41',
//    ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
    }
  }
  do {
    if (random() > 0) {
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().
      return {
        property: 41,
//      ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
        property2: '41',
//      ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
      }
    }
  } while (random() < 0)
//         ^^^^^^ reference syntax 1.0.0 src/`object-literals.ts`/random().

  return {
    property: 42,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    property2: '41',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  }
}

export function constDeclaration(): number[] {
//              ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals.ts`/constDeclaration().
  var configuration1: Configuration = {
//    ^^^^^^^^^^^^^^ definition local 11
//                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    property: 1,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    property2: '1',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  }
  configuration1 = {
//^^^^^^^^^^^^^^ reference local 11
    property: 2,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    property2: '2',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  }
  let configuration2: Configuration = {
//    ^^^^^^^^^^^^^^ definition local 14
//                    ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    property: 3,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    property2: '3',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  }
  configuration2.property = configuration1.property
//^^^^^^^^^^^^^^ reference local 14
//               ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                          ^^^^^^^^^^^^^^ reference local 11
//                                         ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
  const configuration3: Configuration = {
//      ^^^^^^^^^^^^^^ definition local 17
//                      ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    property: 4,
//  ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    property2: '4',
//  ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  }
  return [
    configuration1.property,
//  ^^^^^^^^^^^^^^ reference local 11
//                 ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    configuration2.property,
//  ^^^^^^^^^^^^^^ reference local 14
//                 ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
    configuration3.property,
//  ^^^^^^^^^^^^^^ reference local 17
//                 ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
  ]
}

