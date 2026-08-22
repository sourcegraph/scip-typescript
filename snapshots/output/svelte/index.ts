// < definition svelte-example 1.0.0 `index.ts`/

import Legacy from './Legacy.svelte'
//     ^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
//                 ^^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
import Parent from './Parent.svelte'
//     ^^^^^^ reference svelte-example 1.0.0 `Parent.svelte`/
//                 ^^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Parent.svelte`/

export const component = Parent
//           ^^^^^^^^^ definition svelte-example 1.0.0 `index.ts`/component.
//                       ^^^^^^ reference svelte-example 1.0.0 `Parent.svelte`/
export const components = { Legacy, Parent }
//           ^^^^^^^^^^ definition svelte-example 1.0.0 `index.ts`/components.
//                          ^^^^^^ definition svelte-example 1.0.0 `index.ts`/Legacy0:
//                          ^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
//                                  ^^^^^^ definition svelte-example 1.0.0 `index.ts`/Parent0:
//                                  ^^^^^^ reference svelte-example 1.0.0 `Parent.svelte`/

