  import { Class } from './class'
//         ^^^^^ reference example 1.0.0 src/class.ts/Class#
  import { Enum } from './enum'
//         ^^^^ reference example 1.0.0 src/enum.ts/Enum#
  import { newFunction } from './function'
//         ^^^^^^^^^^^ reference example 1.0.0 src/function.ts/newFunction().
  import { newInterface as renamedInterface } from './interface'
//         ^^^^^^^^^^^^ reference example 1.0.0 src/interface.ts/newInterface().
//                         ^^^^^^^^^^^^^^^^ reference example 1.0.0 src/interface.ts/newInterface().
  
  export function useEverything(): string {
//                ^^^^^^^^^^^^^ definition example 1.0.0 src/import.ts/useEverything().
    return (
      new Class('a').classProperty +
//        ^^^^^ reference example 1.0.0 src/class.ts/Class#
//                   ^^^^^^^^^^^^^ reference example 1.0.0 src/class.ts/Class#classProperty.
      renamedInterface().methodSignature('a') +
//    ^^^^^^^^^^^^^^^^ reference example 1.0.0 src/interface.ts/newInterface().
//                       ^^^^^^^^^^^^^^^ reference example 1.0.0 src/interface.ts/Interface#methodSignature().
      Enum[Enum.A] +
//    ^^^^ reference example 1.0.0 src/enum.ts/Enum#
//         ^^^^ reference example 1.0.0 src/enum.ts/Enum#
//              ^ reference example 1.0.0 src/enum.ts/Enum#A.
      newFunction()
//    ^^^^^^^^^^^ reference example 1.0.0 src/function.ts/newFunction().
    )
  }
  
