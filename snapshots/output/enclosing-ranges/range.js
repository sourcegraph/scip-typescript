// < definition enclosing-ranges 0.0.1 `range.js`/

// format-options: showRanges

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/
//           ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/test.
const test = () => {
//    ^^^^ definition enclosing-ranges 0.0.1 `range.js`/test.
  const a = "a"
//      ^ definition local 2
  const b = "b"
//      ^ definition local 5

  return a + b
//       ^ reference local 2
//           ^ reference local 5
}
//           ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/test.

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/test2().
function test2() {
//       ^^^^^ definition enclosing-ranges 0.0.1 `range.js`/test2().
  const a = "a"
//      ^ definition local 8
  const b = "b"
//      ^ definition local 11

  return a + b
//       ^ reference local 8
//           ^ reference local 11
}
// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/test2().

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#
class Test {
//    ^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#
  constructor() {
//^^^^^^^^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#`<constructor>`().
    const a = "a"
//        ^ definition local 14
    const b = "b"
//        ^ definition local 17

    return a + b
//         ^ reference local 14
//             ^ reference local 17
  }

// ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
  test() {
//^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#test().
    const a = "a"
//        ^ definition local 20
    const b = "b"
//        ^ definition local 23

    return a + b
//         ^ reference local 20
//             ^ reference local 23
  }
// ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().

// ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
  static test() {
//       ^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#test().
    const a = "a"
//        ^ definition local 26
    const b = "b"
//        ^ definition local 29

    return a + b
//         ^ reference local 26
//             ^ reference local 29
  }
// ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
}
// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#

// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/
