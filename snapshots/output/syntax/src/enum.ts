  export enum Enum {
//            ^^^^ definition example 1.0.0 src/`enum.ts`/Enum#
    A,
//  ^ reference example 1.0.0 src/`enum.ts`/Enum#A.
    B,
//  ^ reference example 1.0.0 src/`enum.ts`/Enum#B.
  }
  
  export function newEnum(): Enum {
//                ^^^^^^^ definition example 1.0.0 src/`enum.ts`/newEnum().
//                           ^^^^ reference example 1.0.0 src/`enum.ts`/Enum#
    return Enum.A
//         ^^^^ reference example 1.0.0 src/`enum.ts`/Enum#
//              ^ reference example 1.0.0 src/`enum.ts`/Enum#A.
  }
  
