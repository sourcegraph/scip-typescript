  import { Class } from './class'
//         ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
  import { Enum } from './enum'
//         ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
  import { newFunction } from './function'
//         ^^^^^^^^^^^ reference syntax 1.0.0 src/`function.ts`/newFunction().
  import { newInterface as renamedInterface } from './interface'
//         ^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/newInterface().
//                         ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/newInterface().
  
  export function useEverything(): string {
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`import.ts`/useEverything().
//                documentation ```ts\nfunction useEverything(): string\n```
    return (
      new Class('a').classProperty +
//        ^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#
//                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`class.ts`/Class#classProperty.
      renamedInterface().methodSignature('a') +
//    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/newInterface().
//                       ^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`interface.ts`/Interface#methodSignature().
      Enum[Enum.A] +
//    ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
//         ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
//              ^ reference syntax 1.0.0 src/`enum.ts`/Enum#A.
      newFunction()
//    ^^^^^^^^^^^ reference syntax 1.0.0 src/`function.ts`/newFunction().
    )
  }
  
