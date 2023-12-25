// < definition @example/b 1.0.0 src/`b.ts`/

import { a } from '@example/a'
//       ^ reference @example/a 1.0.0 src/`a.ts`/a().
//                ^^^^^^^^^^^^ reference @example/a 1.0.0 src/`a.ts`/

export function b() {
//              ^ definition @example/b 1.0.0 src/`b.ts`/b().
  return a()
//       ^ reference @example/a 1.0.0 src/`a.ts`/a().
}

