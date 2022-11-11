  export const ConflictingConst = 42
// definition syntax 1.0.0 src/`conflicting-const-interface.ts`/
//documentation ```ts\nmodule "conflicting-const-interface.ts"\n```
//             ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst.
//             documentation ```ts\ninterface ConflictingConst\n```
  export interface ConflictingConst {}
//                 ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#
//                 documentation ```ts\ninterface ConflictingConst\n```
  export class ImplementsConflictingConst implements ConflictingConst {}
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`conflicting-const-interface.ts`/ImplementsConflictingConst#
//             documentation ```ts\nclass ImplementsConflictingConst\n```
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#
//                                                   ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst.
//                                                   ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`conflicting-const-interface.ts`/ConflictingConst#
  
