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
//^^^^^^^ reference typescript 5.9.3 lib/`lib.dom.d.ts`/console.
//^^^^^^^ reference @types/node 20.16.10 `globals.d.ts`/global/console.
//^^^^^^^ reference @types/node 20.16.10 `console.d.ts`/`"node:console"`/global/console/
//^^^^^^^ reference @types/node 20.16.10 `console.d.ts`/`"node:console"`/global/console.
//        ^^^ reference typescript 5.9.3 lib/`lib.dom.d.ts`/Console#log().
//        ^^^ reference @types/node 20.16.10 `console.d.ts`/`"node:console"`/global/Console#log().
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
//       ^ definition local 0
//              ^ reference local 0
//                       ^ reference local 0

for (const x of [1, 2, 3]) {
//         ^ definition local 1
}

var a = 0
//  ^ definition pure-js 1.0.0 src/`main.js`/a.
var a = 1
//  ^ definition pure-js 1.0.0 src/`main.js`/a.
print_fib(a)
//^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
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
//          ^ reference local 2
  var n = 10
//    ^ definition local 2

  if (forever()) {
//    ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
    var m = 10
//      ^ definition local 3
  }
  print_fib(m)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 3
}

function var_function_scope() {
//       ^^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/var_function_scope().
  var k = 0
//    ^ definition local 4
  if (forever()) {
//    ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
    var k = 1
//      ^ definition local 5
  }
  print_fib(k)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference local 4
//          ^ reference local 5
}

function array_of_objects() {
//       ^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/array_of_objects().
  var a = [{ element: 0 }, { element: 1 }]
//    ^ definition local 6
//           ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/element0:
//                           ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/element1:
}

function SomeClass() {}
//       ^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/SomeClass().

SomeClass.prototype = {
//^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().
//        ^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/SomeClass().prototype.
  someMethod() {},
//^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/SomeClass().prototype.someMethod().
}

SomeClass.prototype.someMethod2 = () => {}
//^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().
//        ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().prototype.
//                  ^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/SomeClass().prototype.someMethod2().

new SomeClass().someMethod()
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().
//              ^^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().prototype.someMethod().
new SomeClass().someMethod2()
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().
//              ^^^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/SomeClass().prototype.someMethod2().

import {
  SomeExportedClass,
//^^^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#
  SomeAnonymousClass,
//^^^^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeAnonymousClass#
  someFunc,
//^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someFunc.
  someAnonymousFunc,
//^^^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someAnonymousFunc.
  someArrowFunc,
//^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someArrowFunc.
  someValue,
//^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someValue.
} from './exports'
//     ^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/

new SomeExportedClass().method()
//  ^^^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#
//                      ^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#method().
new SomeAnonymousClass().method()
//  ^^^^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeAnonymousClass#
//                       ^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeAnonymousClass#method().
someFunc()
//^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someFunc.
someAnonymousFunc()
//^^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someAnonymousFunc.
someArrowFunc()
//^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someArrowFunc.
const i = someValue
//    ^ definition pure-js 1.0.0 src/`main.js`/i.
//        ^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someValue.

