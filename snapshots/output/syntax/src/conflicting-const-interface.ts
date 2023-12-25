// < definition syntax 1.0.0 src/`conflicting-const-interface.ts`/

export const ConflictingConst = 42
//           ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst.
export interface ConflictingConst {}
//               ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#
export class ImplementsConflictingConst implements ConflictingConst {}
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ImplementsConflictingConst#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#
//                                                 ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst.
//                                                 ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#

