  import { Configuration } from './reusable-types'
// definition syntax 1.0.0 src/`decorators.ts`/
//documentation ```ts\nmodule "decorators.ts"\n```
//         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                              ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/
  
  function MyDecorator(value: Configuration) {
//         ^^^^^^^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyDecorator().
//         documentation ```ts\nfunction MyDecorator(value: Configuration): (target: Function) => void\n```
//                     ^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyDecorator().(value)
//                     documentation ```ts\n(parameter) value: Configuration\n```
//                            ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
    return function (target: Function) {
//                   ^^^^^^ definition local 2
//                   documentation ```ts\n(parameter) target: Function\n```
//                           ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Function#
//                           ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Function.
//                           ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es2015.core.d.ts`/Function#
//                           ^^^^^^^^ reference typescript 4.8.4 lib/`lib.es2015.symbol.wellknown.d.ts`/Function#
      console.log(`MyDecorator is called with value: ${value}`)
//    ^^^^^^^ reference typescript 4.8.4 lib/`lib.dom.d.ts`/console.
//    ^^^^^^^ reference @types/node 17.0.14 `globals.d.ts`/console.
//    ^^^^^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console/
//    ^^^^^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/console.
//            ^^^ reference typescript 4.8.4 lib/`lib.dom.d.ts`/Console#log().
//            ^^^ reference @types/node 17.0.14 `console.d.ts`/`'node:console'`/global/Console#log().
//                                                     ^^^^^ reference syntax 1.0.0 src/`decorators.ts`/MyDecorator().(value)
    }
  }
  
  @MyDecorator({ property: 42, property2: '42' })
// ^^^^^^^^^^^ reference syntax 1.0.0 src/`decorators.ts`/MyDecorator().
//               ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                             ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
  class MyClass {
//      ^^^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyClass#
//      documentation ```ts\nclass MyClass\n```
    //...
  }
  
