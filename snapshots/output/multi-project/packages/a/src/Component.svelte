// < definition @example/a 1.0.0 src/`Component.svelte`/

<script lang="ts">
  type Props = { label: string }
//     ^^^^^ definition @example/a 1.0.0 src/`Component.svelte`/Props#
//               ^^^^^ definition @example/a 1.0.0 src/`Component.svelte`/Props#label.
  let { label }: Props = $props()
//      ^^^^^ definition local 4
//      ^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/Props#label.
//               ^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/Props#
//                       ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props().
//                       ^^^^^^ reference svelte 5.56.10 types/`index.d.ts`/$props/
</script>

<p>{label}</p>
//  ^^^^^ reference local 4

