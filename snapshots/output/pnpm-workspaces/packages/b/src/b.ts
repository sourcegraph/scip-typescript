  import { a } from '@example/a'
// definition @example/b 1.0.0 src/`b.ts`/
//documentation ```ts\nmodule "b.ts"\n```
//         ^ reference @example/a 1.0.0 src/`a.ts`/a().
//                  ^^^^^^^^^^^^ reference @example/a 1.0.0 src/`a.ts`/
  
  export function b() {
//                ^ definition @example/b 1.0.0 src/`b.ts`/b().
//                documentation ```ts\nfunction b(): string\n```
    return a()
//         ^ reference @example/a 1.0.0 src/`a.ts`/a().
  }
  
