// < definition @example/b 1.0.0 src/`b.ts`/

import { a } from '@example/a/src'
//       ^ reference local 0

export function b() {
//              ^ definition @example/b 1.0.0 src/`b.ts`/b().
  return a()
//       ^ reference local 0
}

