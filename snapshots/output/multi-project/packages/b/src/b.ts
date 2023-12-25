// < definition @example/b 1.0.0 src/`b.ts`/

import { a } from '@example/a/src'
//       ^ reference @example/a 1.0.0 src/`index.ts`/a().
//                ^^^^^^^^^^^^^^^^ reference @example/a 1.0.0 src/`index.ts`/

export function b() {
//              ^ definition @example/b 1.0.0 src/`b.ts`/b().
  return a()
//       ^ reference @example/a 1.0.0 src/`index.ts`/a().
}

