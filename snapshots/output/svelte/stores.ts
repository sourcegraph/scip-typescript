// language TypeScript
// < definition svelte-example 1.0.0 `stores.ts`/

import { writable } from 'svelte/store'
//       ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/writable().
//                       ^^^^^^^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/

export const importedCount = writable(3)
//           ^^^^^^^^^^^^^ definition svelte-example 1.0.0 `stores.ts`/importedCount.
//                           ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/writable().

