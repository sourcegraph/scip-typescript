  export function local(): string {
//                ^^^^^ definition syntax 1.0.0 src/`local.ts`/local().
//                documentation ```ts\nfunction local(): string\n```
    const a = 'a'
//        ^ definition local 2
//        documentation ```ts\nvar a: "a"\n```
    let b = a
//      ^ definition local 5
//      documentation ```ts\nvar b: string\n```
//          ^ reference local 2
    var c = b,
//      ^ definition local 8
//      documentation ```ts\nvar c: string\n```
//          ^ reference local 5
      c2 = b
//    ^^ definition local 9
//    documentation ```ts\nvar c2: string\n```
//         ^ reference local 5
    for (let d = 0; d < c.length; d++) {
//           ^ definition local 12
//           documentation ```ts\nvar d: number\n```
//                  ^ reference local 12
//                      ^ reference local 8
//                        ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/String#length.
//                                ^ reference local 12
      c += d
//    ^ reference local 8
//         ^ reference local 12
      c2 += c.length
//    ^^ reference local 9
//          ^ reference local 8
//            ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/String#length.
    }
    return [c, c2].reduce((previousValue, currentValue, currentIndex) => {
//          ^ reference local 8
//             ^^ reference local 9
//                 ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Array#reduce().
//                 ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Array#reduce().
//                 ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Array#reduce().
//                         ^^^^^^^^^^^^^ definition local 16
//                         documentation ```ts\n(parameter) previousValue: string\n```
//                                        ^^^^^^^^^^^^ definition local 17
//                                        documentation ```ts\n(parameter) currentValue: string\n```
//                                                      ^^^^^^^^^^^^ definition local 18
//                                                      documentation ```ts\n(parameter) currentIndex: number\n```
      return previousValue + currentValue + currentIndex
//           ^^^^^^^^^^^^^ reference local 16
//                           ^^^^^^^^^^^^ reference local 17
//                                          ^^^^^^^^^^^^ reference local 18
    })
  }
  
