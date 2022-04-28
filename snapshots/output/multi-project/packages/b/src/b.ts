  import { a } from '@example/a/src'
//         ^ reference @example/a 1.0.0 src/`index.ts`/a().
  
  export function b() {
//                ^ definition @example/b 1.0.0 src/`b.ts`/b().
//                documentation ```ts\nfunction b(): string\n```
    return a()
//         ^ reference @example/a 1.0.0 src/`index.ts`/a().
  }
  
