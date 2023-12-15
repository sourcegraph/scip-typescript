// < definition scip-typescript npm @example/b 1.0.0 src/`b.ts`/

import { a } from '@example/a'
//       ^ reference scip-typescript npm @example/a 1.0.0 src/`a.ts`/a().
//                ^^^^^^^^^^^^ reference scip-typescript npm @example/a 1.0.0 src/`a.ts`/

export function b() {
//              ^ definition scip-typescript npm @example/b 1.0.0 src/`b.ts`/b().
  return a()
//       ^ reference scip-typescript npm @example/a 1.0.0 src/`a.ts`/a().
}

