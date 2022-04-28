  export enum Enum {
//            ^^^^ definition syntax 1.0.0 src/`enum.ts`/Enum#
//            documentation ```ts\nEnum\n```
//            documentation 
    A,
//  ^ definition syntax 1.0.0 src/`enum.ts`/Enum#A.
//  documentation ```ts\nEnum.A\n```
//  documentation 
    B,
//  ^ definition syntax 1.0.0 src/`enum.ts`/Enum#B.
//  documentation ```ts\nEnum.B\n```
//  documentation 
  }
  
  export function newEnum(): Enum {
//                ^^^^^^^ definition syntax 1.0.0 src/`enum.ts`/newEnum().
//                documentation ```ts\n() => Enum\n```
//                documentation 
//                           ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
    return Enum.A
//         ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
//              ^ reference syntax 1.0.0 src/`enum.ts`/Enum#A.
  }
  
