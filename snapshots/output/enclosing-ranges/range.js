// < definition enclosing-ranges 0.0.1 `range.js`/

// format-options: showRanges

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/
//           ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/test.
const test = () => {
//    ^^^^ definition enclosing-ranges 0.0.1 `range.js`/test.
  const a = 'a'
//      ^ definition local 0
  const b = 'b'
//      ^ definition local 1

  return a + b
//       ^ reference local 0
//           ^ reference local 1
}
//           ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/test.

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/test2().
function test2() {
//       ^^^^^ definition enclosing-ranges 0.0.1 `range.js`/test2().
  const a = 'a'
//      ^ definition local 2
  const b = 'b'
//      ^ definition local 3

  return a + b
//       ^ reference local 2
//           ^ reference local 3
}
// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/test2().

// < start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#
class Test {
//    ^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#
// ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#`<constructor>`().
  constructor() {
//^^^^^^^^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#`<constructor>`().
    const a = 'a'
//        ^ definition local 4
    const b = 'b'
//        ^ definition local 5

    return a + b
//         ^ reference local 4
//             ^ reference local 5
  }
// ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#`<constructor>`().

// ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
  test() {
//^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#test().
    const a = 'a'
//        ^ definition local 6
    const b = 'b'
//        ^ definition local 7

    return a + b
//         ^ reference local 6
//             ^ reference local 7
  }
// ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().

// ⌄ start enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
  static test() {
//       ^^^^ definition enclosing-ranges 0.0.1 `range.js`/Test#test().
    const a = 'a'
//        ^ definition local 8
    const b = 'b'
//        ^ definition local 9

    return a + b
//         ^ reference local 8
//             ^ reference local 9
  }
// ^ end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#test().
}
// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/Test#

// < end enclosing_range enclosing-ranges 0.0.1 `range.js`/
