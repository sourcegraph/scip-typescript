  import { a } from '@example/a'
// definition @example/b 1.0.0 src/`b.ts`/
//documentation ```ts\nmodule "b.ts"\n```
//         ^ reference local 0
  
  export function b() {
//                ^ definition @example/b 1.0.0 src/`b.ts`/b().
//                documentation ```ts\nfunction b(): any\n```
    return a()
//         ^ reference local 0
  }
  
