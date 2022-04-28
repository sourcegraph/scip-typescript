  function fib(n) {
//         ^^^ definition pure-js 1.0.0 src/`main.js`/fib().
//         documentation ```ts\nfunction fib(n: any): any\n```
//             ^ definition pure-js 1.0.0 src/`main.js`/fib().(n)
//             documentation ```ts\n(parameter) n: any\n```
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
//         documentation ```ts\nfunction print_fib(a: any): void\n```
//                   ^ definition pure-js 1.0.0 src/`main.js`/print_fib().(a)
//                   documentation ```ts\n(parameter) a: any\n```
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
//    documentation ```ts\nvar y: string\n```
  function capture() {
//         ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture().
//         documentation ```ts\nfunction capture(): string\n```
    return y
//         ^ reference pure-js 1.0.0 src/`main.js`/y.
  }
  const capture_lambda = () => {
//      ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/capture_lambda.
//      documentation ```ts\nvar capture_lambda: () => string\n```
    return y
//         ^ reference pure-js 1.0.0 src/`main.js`/y.
  }
  
  for (var i = 0; i <= 10; i++) {}
//         ^ definition local 2
//         documentation ```ts\nvar i: number\n```
//                ^ reference local 2
//                         ^ reference local 2
  
  for (const x of [1, 2, 3]) {
//           ^ definition local 5
//           documentation ```ts\nvar x: number\n```
  }
  
  var a = 0
//    ^ definition pure-js 1.0.0 src/`main.js`/a.
//    documentation ```ts\nvar a: number\n```
  var a = 1
//    ^ definition pure-js 1.0.0 src/`main.js`/a.
//    documentation ```ts\nvar a: number\n```
  print_fib(a)
//^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//          ^ reference pure-js 1.0.0 src/`main.js`/a.
//          ^ reference pure-js 1.0.0 src/`main.js`/a.
  
  function forever() {
//         ^^^^^^^ definition pure-js 1.0.0 src/`main.js`/forever().
//         documentation ```ts\nfunction forever(): any\n```
    return forever()
//         ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
  }
  
  function use_before_def() {
//         ^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/use_before_def().
//         documentation ```ts\nfunction use_before_def(): void\n```
    print_fib(n)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 8
    var n = 10
//      ^ definition local 8
//      documentation ```ts\nvar n: number\n```
  
    if (forever()) {
//      ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
      var m = 10
//        ^ definition local 11
//        documentation ```ts\nvar m: number\n```
    }
    print_fib(m)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 11
  }
  
  function var_function_scope() {
//         ^^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`main.js`/var_function_scope().
//         documentation ```ts\nfunction var_function_scope(): void\n```
    var k = 0
//      ^ definition local 14
//      documentation ```ts\nvar k: number\n```
    if (forever()) {
//      ^^^^^^^ reference pure-js 1.0.0 src/`main.js`/forever().
      var k = 1
//        ^ definition local 14
//        documentation ```ts\nvar k: number\n```
    }
    print_fib(k)
//  ^^^^^^^^^ reference pure-js 1.0.0 src/`main.js`/print_fib().
//            ^ reference local 14
//            ^ reference local 17
  }
  
