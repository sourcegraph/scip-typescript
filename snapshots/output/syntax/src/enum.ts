  export enum Enum {
//            ^^^^ definition syntax 1.0.0 src/`enum.ts`/Enum#
//            documentation ```ts\nenum Enum\n```
    A,
//  ^ definition syntax 1.0.0 src/`enum.ts`/Enum#A.
//  documentation ```ts\n(enum member) A\n```
    B,
//  ^ definition syntax 1.0.0 src/`enum.ts`/Enum#B.
//  documentation ```ts\n(enum member) B = 1\n```
  }
  
  export function newEnum(): Enum {
//                ^^^^^^^ definition syntax 1.0.0 src/`enum.ts`/newEnum().
//                documentation ```ts\nfunction newEnum(): Enum\n```
//                           ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
    return Enum.A
//         ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
//              ^ reference syntax 1.0.0 src/`enum.ts`/Enum#A.
  }
  
