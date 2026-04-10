// < definition syntax 1.0.0 src/`local.ts`/

export function local(): string {
//              ^^^^^ definition syntax 1.0.0 src/`local.ts`/local().
  const a = 'a'
//      ^ definition local 0
  let b = a
//    ^ definition local 1
//        ^ reference local 0
  var c = b,
//    ^ definition local 2
//        ^ reference local 1
    c2 = b
//  ^^ definition local 3
//       ^ reference local 1
  for (let d = 0; d < c.length; d++) {
//         ^ definition local 5
//                ^ reference local 5
//                    ^ reference local 2
//                      ^^^^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/String#length.
//                              ^ reference local 5
    c += d
//  ^ reference local 2
//       ^ reference local 5
    c2 += c.length
//  ^^ reference local 3
//        ^ reference local 2
//          ^^^^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/String#length.
  }
  return [c, c2].reduce((previousValue, currentValue, currentIndex) => {
//        ^ reference local 2
//           ^^ reference local 3
//               ^^^^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/Array#reduce().
//                       ^^^^^^^^^^^^^ definition local 9
//                                      ^^^^^^^^^^^^ definition local 10
//                                                    ^^^^^^^^^^^^ definition local 11
    return previousValue + currentValue + currentIndex
//         ^^^^^^^^^^^^^ reference local 9
//                         ^^^^^^^^^^^^ reference local 10
//                                        ^^^^^^^^^^^^ reference local 11
  })
}

