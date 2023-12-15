// < definition scip-typescript npm syntax 1.0.0 src/`import.ts`/

import * as namespace from './namespace'
//          ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/
//                         ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/
import { Class } from './class'
//       ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#
//                    ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/
import { Enum } from './enum'
//       ^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
//                   ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/
import { newFunction } from './function'
//       ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`function.ts`/newFunction().
//                          ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`function.ts`/
import { newInterface as renamedInterface } from './interface'
//       ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/newInterface().
//                       ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/newInterface().
//                                               ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/

export function useEverything(): string {
//              ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`import.ts`/useEverything().
  return (
    new Class('a').classProperty +
//      ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#`<constructor>`().
//                 ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`class.ts`/Class#classProperty.
    renamedInterface().methodSignature('a') +
//  ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/newInterface().
//                     ^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
    Enum[Enum.A] +
//  ^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
//       ^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
//            ^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#A.
    newFunction() +
//  ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`function.ts`/newFunction().
    namespace.a.value
//  ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/
//            ^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/
//              ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/value.
  )
}

export function dynamicImport(): Promise<void> {
//              ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`import.ts`/dynamicImport().
//                               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
  return import('./function').then(c => c.newFunction())
//              ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`function.ts`/
//                            ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                                 ^ definition local 3
//                                      ^ reference local 3
//                                        ^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`function.ts`/newFunction().
}

