// < definition pure-js 1.0.0 src/`main.js`/

function fib(n) {
//       ^^^ definition pure-js 1.0.0 src/`main.js`/fib().
//           ^ definition pure-js 1.0.0 src/`main.js`/fib().(n)
  if (n <= 1) {
//    ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
    return 0
  }
  return fib(n - 1) + fib(n - 2)
//       ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//           ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
//                    ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//                        ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
}

function print_fib(a) {
//       ^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/print_fib().
//                 ^ definition pure-js 1.0.0 src/`main.js`/print_fib().(a)
  console.log(fib(a))
//^^^^^^^ reference typescript 5.3.3 lib/`lib.dom.d.ts`/console.
//^^^^^^^ reference @types/node 20.10.5 `globals.d.ts`/global/console.
//^^^^^^^ reference @types/node 20.10.5 `console.d.ts`/`node:console`/global/console/
//^^^^^^^ reference @types/node 20.10.5 `console.d.ts`/`node:console`/global/console.
//        ^^^ reference typescript 5.3.3 lib/`lib.dom.d.ts`/Console#log().
//        ^^^ reference @types/node 20.10.5 `console.d.ts`/`node:console`/global/Console#log().
//            ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//                ^ reference pure-js 1.0.0 src/`main.js`/print_fib().(a)
}

var y = 'Hello'
//  ^ definition pure-js 1.0.0 src/`main.js`/y.
function capture() {
//       ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture().
  return y
//       ^ reference pure-js 1.0.0 src/`main.js`/y.
}
const capture_lambda = () => {
//    ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture_lambda.
  return y
//       ^ reference pure-js 1.0.0 src/`main.js`/y.
}

for (var i = 0; i <= 10; i++) {}
//       ^ definition local 4
//              ^ reference local 4
//                       ^ reference local 4

for (const x of [1, 2, 3]) {
//         ^ definition local 7
}

var a = 0
//  ^ definition pure-js 1.0.0 src/`main.js`/a.
var a = 1
//  ^ definition pure-js 1.0.0 src/`main.js`/a.
print_fib(a)
//^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//        ^ reference pure-js 1.0.0 src/`main.js`/a.

function forever() {
//       ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/forever().
  return forever()
//       ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
}

function use_before_def() {
//       ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/use_before_def().
  print_fib(n)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 10
  var n = 10
//    ^ definition local 10

  if (forever()) {
//    ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
    var m = 10
//      ^ definition local 13
  }
  print_fib(m)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 13
}

function var_function_scope() {
//       ^^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/var_function_scope().
  var k = 0
//    ^ definition local 16
  if (forever()) {
//    ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
    var k = 1
//      ^ definition local 19
  }
  print_fib(k)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 16
//          ^ reference local 19
}

