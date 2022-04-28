  import { a } from '@example/a/src'
//         ^ reference @example/a 1.0.0 src/`index.ts`/a().
  
  export function b() {
//                ^ definition @example/b 1.0.0 src/`b.ts`/b().
//                documentation ```ts\n() => string\n```
//                documentation 
    return a()
//         ^ reference @example/a 1.0.0 src/`index.ts`/a().
  }
  
