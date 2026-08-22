// language Svelte
// < definition svelte-example 1.0.0 `Child.svelte`/

<script lang="ts">
  let { label, count = 0 }: { label: string; count?: number } = $props()
//      ^^^^^ definition local 4
//      ^^^^^ reference svelte-example 1.0.0 `Child.svelte`/Props#label.
//             ^^^^^ definition local 5
//             ^^^^^ reference svelte-example 1.0.0 `Child.svelte`/Props#count.
//                            ^^^^^ definition svelte-example 1.0.0 `Child.svelte`/Props#label.
//                                           ^^^^^ definition svelte-example 1.0.0 `Child.svelte`/Props#count.
//                                                              ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props().
//                                                              ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props/
  const doubled = $derived(count * 2)
//      ^^^^^^^ definition local 8
//                ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$derived().
//                ^^^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$derived/
//                         ^^^^^ reference local 5
</script>

<button>{label}: {doubled}</button>
//       ^^^^^ reference local 4
//                ^^^^^^^ reference local 8

