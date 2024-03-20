// < definition syntax 1.0.0 src/`local.ts`/

export function local(): string {
//              ^^^^^ definition syntax 1.0.0 src/`local.ts`/local().
  const a = 'a'
//      ^ definition local 2
  let b = a
//    ^ definition local 5
//        ^ reference local 2
  var c = b,
//    ^ definition local 8
//        ^ reference local 5
    c2 = b
//  ^^ definition local 9
//       ^ reference local 5
  for (let d = 0; d < c.length; d++) {
//         ^ definition local 12
//                ^ reference local 12
//                    ^ reference local 8
//                      ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/length0:
//                              ^ reference local 12
    c += d
//  ^ reference local 8
//       ^ reference local 12
    c2 += c.length
//  ^^ reference local 9
//        ^ reference local 8
//          ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/length0:
  }
  return [c, c2].reduce((previousValue, currentValue, currentIndex) => {
//        ^ reference local 8
//           ^^ reference local 9
//               ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#reduce().
//                       ^^^^^^^^^^^^^ definition local 16
//                                      ^^^^^^^^^^^^ definition local 17
//                                                    ^^^^^^^^^^^^ definition local 18
    return previousValue + currentValue + currentIndex
//         ^^^^^^^^^^^^^ reference local 16
//                         ^^^^^^^^^^^^ reference local 17
//                                        ^^^^^^^^^^^^ reference local 18
  })
}

