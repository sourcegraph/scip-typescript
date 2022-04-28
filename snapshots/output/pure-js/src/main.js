  function fib(n) {
//         ^^^ definition pure-js 1.0.0 src/`main.js`/fib().
//         documentation ```ts\n(n: any) => any\n```
//             ^ definition pure-js 1.0.0 src/`main.js`/fib().(n)
//             documentation ```ts\nany\n```
    if (n <= 1) {
//      ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
      return 0
    }
    return fib(n - 1) + fib(n - 2)
//         ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//             ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
//                      ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//                          ^ reference pure-js 1.0.0 src/`main.js`/fib().(n)
  }
  
  function print_fib(a) {
//         ^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/print_fib().
//         documentation ```ts\n(a: any) => void\n```
//                   ^ definition pure-js 1.0.0 src/`main.js`/print_fib().(a)
//                   documentation ```ts\nany\n```
    console.log(fib(a))
//  ^^^^^^^ reference typescript 4.6.2 lib/`lib.dom.d.ts`/console.
//  ^^^^^^^ reference @types/node 17.0.14 `globals.d.ts`/console.
//  ^^^^^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console/
//  ^^^^^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console.
//          ^^^ reference typescript 4.6.2 lib/`lib.dom.d.ts`/Console#log().
//          ^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/Console#log().
//              ^^^ reference pure-js 1.0.0 src/`main.js`/fib().
//                  ^ reference pure-js 1.0.0 src/`main.js`/print_fib().(a)
  }
  
  var y = 'Hello'
//    ^ definition pure-js 1.0.0 src/`main.js`/y.
//    documentation ```ts\nstring\n```
  function capture() {
//         ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture().
//         documentation ```ts\n() => string\n```
    return y
//         ^ reference pure-js 1.0.0 src/`main.js`/y.
  }
  const capture_lambda = () => {
//      ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture_lambda.
//      documentation ```ts\n() => string\n```
    return y
//         ^ reference pure-js 1.0.0 src/`main.js`/y.
  }
  
  for (var i = 0; i <= 10; i++) {}
//         ^ definition local 2
//         documentation ```ts\nnumber\n```
//                ^ reference local 2
//                         ^ reference local 2
  
  for (const x of [1, 2, 3]) {
//           ^ definition local 5
//           documentation ```ts\nnumber\n```
  }
  
  var a = 0
//    ^ definition pure-js 1.0.0 src/`main.js`/a.
//    documentation ```ts\nnumber\n```
  var a = 1
//    ^ definition pure-js 1.0.0 src/`main.js`/a.
//    documentation ```ts\nnumber\n```
  print_fib(a)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference pure-js 1.0.0 src/`main.js`/a.
//          ^ reference pure-js 1.0.0 src/`main.js`/a.
  
  function forever() {
//         ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/forever().
//         documentation ```ts\n() => any\n```
    return forever()
//         ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
  }
  
  function use_before_def() {
//         ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/use_before_def().
//         documentation ```ts\n() => void\n```
    print_fib(n)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 8
    var n = 10
//      ^ definition local 8
//      documentation ```ts\nnumber\n```
  
    if (forever()) {
//      ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
      var m = 10
//        ^ definition local 11
//        documentation ```ts\nnumber\n```
    }
    print_fib(m)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 11
  }
  
  function var_function_scope() {
//         ^^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/var_function_scope().
//         documentation ```ts\n() => void\n```
    var k = 0
//      ^ definition local 14
//      documentation ```ts\nnumber\n```
    if (forever()) {
//      ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
      var k = 1
//        ^ definition local 14
//        documentation ```ts\nnumber\n```
    }
    print_fib(k)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 14
//            ^ reference local 17
  }
  
