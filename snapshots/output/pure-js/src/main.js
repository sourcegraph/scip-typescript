// < definition scip-typescript npm pure-js 1.0.0 src/`main.js`/

function fib(n) {
//       ^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().
//           ^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().(n)
  if (n <= 1) {
//    ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().(n)
    return 0
  }
  return fib(n - 1) + fib(n - 2)
//       ^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().
//           ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().(n)
//                    ^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().
//                        ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().(n)
}

function print_fib(a) {
//       ^^^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().
//                 ^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().(a)
  console.log(fib(a))
//^^^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.dom.d.ts`/console.
//^^^^^^^ reference scip-typescript npm @types/node 17.0.14 `globals.d.ts`/console.
//^^^^^^^ reference scip-typescript npm @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console/
//^^^^^^^ reference scip-typescript npm @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console.
//        ^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.dom.d.ts`/Console#log().
//        ^^^ reference scip-typescript npm @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/Console#log().
//            ^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/fib().
//                ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().(a)
}

var y = 'Hello'
//  ^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/y.
function capture() {
//       ^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/capture().
  return y
//       ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/y.
}
const capture_lambda = () => {
//    ^^^^^^^^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/capture_lambda.
  return y
//       ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/y.
}

for (var i = 0; i <= 10; i++) {}
//       ^ definition local 2
//              ^ reference local 2
//                       ^ reference local 2

for (const x of [1, 2, 3]) {
//         ^ definition local 5
}

var a = 0
//  ^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/a.
var a = 1
//  ^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/a.
print_fib(a)
//^^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().
//        ^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/a.

function forever() {
//       ^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/forever().
  return forever()
//       ^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/forever().
}

function use_before_def() {
//       ^^^^^^^^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/use_before_def().
  print_fib(n)
//^^^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 8
  var n = 10
//    ^ definition local 8

  if (forever()) {
//    ^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/forever().
    var m = 10
//      ^ definition local 11
  }
  print_fib(m)
//^^^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 11
}

function var_function_scope() {
//       ^^^^^^^^^^^^^^^^^^ definition scip-typescript npm pure-js 1.0.0 src/`main.js`/var_function_scope().
  var k = 0
//    ^ definition local 14
  if (forever()) {
//    ^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/forever().
    var k = 1
//      ^ definition local 17
  }
  print_fib(k)
//^^^^^^^^^ reference scip-typescript npm pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 14
//          ^ reference local 17
}

