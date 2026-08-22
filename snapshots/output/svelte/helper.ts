// language TypeScript
// < definition svelte-example 1.0.0 `helper.ts`/

export interface User {
//               ^^^^ definition svelte-example 1.0.0 `helper.ts`/User#
  name: string
//^^^^ definition svelte-example 1.0.0 `helper.ts`/User#name.
}

export function format(name: string): string {
//              ^^^^^^ definition svelte-example 1.0.0 `helper.ts`/format().
//                     ^^^^ definition svelte-example 1.0.0 `helper.ts`/format().(name)
  return name.toUpperCase()
//       ^^^^ reference svelte-example 1.0.0 `helper.ts`/format().(name)
//            ^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/String#toUpperCase().
}

