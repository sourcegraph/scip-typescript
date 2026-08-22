// < definition svelte-example 1.0.0 `Generic.svelte`/

<script lang="ts" generics="Value">
//                          ^^^^^ definition svelte-example 1.0.0 `Generic.svelte`/[Value]
  let { value }: { value: Value } = $props()
//      ^^^^^ definition local 4
//      ^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/Props#value.
//                 ^^^^^ definition svelte-example 1.0.0 `Generic.svelte`/Props#value.
//                        ^^^^^ reference svelte-example 1.0.0 `Generic.svelte`/[Value]
//                                  ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props().
//                                  ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props/
</script>

<span>{value}</span>
//     ^^^^^ reference local 4

