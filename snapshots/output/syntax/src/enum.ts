// < definition scip-typescript npm syntax 1.0.0 src/`enum.ts`/

export enum Enum {
//          ^^^^ definition scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
  A,
//^ definition scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#A.
  B,
//^ definition scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#B.
}

export function newEnum(): Enum {
//              ^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`enum.ts`/newEnum().
//                         ^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
  return Enum.A
//       ^^^^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#
//            ^ reference scip-typescript npm syntax 1.0.0 src/`enum.ts`/Enum#A.
}

