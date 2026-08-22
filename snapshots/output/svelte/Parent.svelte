// < definition svelte-example 1.0.0 `Parent.svelte`/

<script lang="ts">
  import { writable } from 'svelte/store'
//         ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/writable().
//                         ^^^^^^^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/
  import Child from './Child.svelte'
//       ^^^^^ reference svelte-example 1.0.0 `Child.svelte`/
//                  ^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Child.svelte`/
  import Generic from './Generic.svelte'
//       ^^^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/
//                    ^^^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/
  import Legacy from './Legacy.svelte'
//       ^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
//                   ^^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
  import Plain from './Plain.svelte'
//       ^^^^^ reference svelte-example 1.0.0 `Plain.svelte`/
//                  ^^^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `Plain.svelte`/
  import { format, type User } from './helper'
//         ^^^^^^ reference svelte-example 1.0.0 `helper.ts`/format().
//                      ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#
//                                  ^^^^^^^^^^ reference svelte-example 1.0.0 `helper.ts`/
  import { importedCount } from './stores'
//         ^^^^^^^^^^^^^ reference svelte-example 1.0.0 `stores.ts`/importedCount.
//                              ^^^^^^^^^^ reference svelte-example 1.0.0 `stores.ts`/

  const user: User = { name: 'Ada' }
//      ^^^^ definition local 7
//            ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#
//                     ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#name.
  let clicks = $state(1)
//    ^^^^^^ definition local 10
//             ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$state().
//             ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$state/
  const count = writable(2)
//      ^^^^^ definition local 13
//              ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/`'svelte/store'`/writable().
  let generic: Generic<User> | undefined = $state()
//    ^^^^^^^ definition local 16
//             ^^^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/
//                     ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#
//                                         ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$state().
//                                         ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$state/

  function increment(): void {
//         ^^^^^^^^^ definition local 17
    clicks += 1
//  ^^^^^^ reference local 10
  }
</script>

{#snippet greeting(name: string)}
//        ^^^^^^^^ definition local 2
//                 ^^^^ definition local 4
  <strong>Hello {name}</strong>
//               ^^^^ reference local 4
{/snippet}

<button onclick={increment}>Increment</button>
//      ^^^^^^^ definition svelte-example 1.0.0 `Parent.svelte`/`"onclick"0`:
//               ^^^^^^^^^ reference local 17
<Child label={format(user.name)} count={clicks} />
//^^^^^ reference svelte-example 1.0.0 `Child.svelte`/
//     ^^^^^ reference svelte-example 1.0.0 `Child.svelte`/Props#label.
//            ^^^^^^ reference svelte-example 1.0.0 `helper.ts`/format().
//                   ^^^^ reference local 7
//                        ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#name.
//                               ^^^^^ reference svelte-example 1.0.0 `Child.svelte`/Props#count.
//                                      ^^^^^^ reference local 10
<Generic bind:this={generic} value={user} />
//^^^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/
//                  ^^^^^^^ reference local 16
//                           ^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/Props#value.
//                                  ^^^^ reference local 7
<Legacy value="legacy" />
//^^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/
//      ^^^^^ reference svelte-example 1.0.0 `Legacy.svelte`/Props#value.
<Plain enabled={true} />
//^^^^^ reference svelte-example 1.0.0 `Plain.svelte`/
//     ^^^^^^^ reference svelte-example 1.0.0 `Plain.svelte`/Props#enabled.
<p>{$count}</p>
//  ^^^^^^ reference local 13
<p>{$importedCount}</p>
//  ^^^^^^^^^^^^^^ reference svelte-example 1.0.0 `stores.ts`/importedCount.
{@render greeting(user.name)}
//       ^^^^^^^^ reference local 2
//                ^^^^ reference local 7
//                     ^^^^ reference svelte-example 1.0.0 `helper.ts`/User#name.

