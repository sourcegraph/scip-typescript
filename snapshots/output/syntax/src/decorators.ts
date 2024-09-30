// < definition syntax 1.0.0 src/`decorators.ts`/

import { Configuration } from './reusable-types'
//       ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                            ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/

function MyDecorator(value: Configuration) {
//       ^^^^^^^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyDecorator().
//                   ^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyDecorator().(value)
//                          ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Configuration#
  return function (target: Function) {
//                 ^^^^^^ definition local 2
//                         ^^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Function#
//                         ^^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Function.
//                         ^^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.core.d.ts`/Function#
//                         ^^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Function#
    console.log(`MyDecorator is called with value: ${value}`)
//  ^^^^^^^ reference typescript 5.3.3 lib/`lib.dom.d.ts`/console.
//  ^^^^^^^ reference @types/node 20.10.5 `globals.d.ts`/global/console.
//  ^^^^^^^ reference @types/node 20.10.5 `console.d.ts`/`"node:console"`/global/console/
//  ^^^^^^^ reference @types/node 20.10.5 `console.d.ts`/`"node:console"`/global/console.
//          ^^^ reference typescript 5.3.3 lib/`lib.dom.d.ts`/Console#log().
//          ^^^ reference @types/node 20.10.5 `console.d.ts`/`"node:console"`/global/Console#log().
//                                                   ^^^^^ reference syntax 1.0.0 src/`decorators.ts`/MyDecorator().(value)
  }
}

@MyDecorator({ property: 42, property2: '42' })
//^^^^^^^^^^^ reference syntax 1.0.0 src/`decorators.ts`/MyDecorator().
//             ^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//                           ^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
class MyClass {
//    ^^^^^^^ definition syntax 1.0.0 src/`decorators.ts`/MyClass#
  //...
}

