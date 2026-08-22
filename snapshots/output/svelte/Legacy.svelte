// < definition svelte-example 1.0.0 `Legacy.svelte`/

<script lang="ts">
  export let value: string
//           ^^^^^ definition local 2
//           ^^^^^ definition svelte-example 1.0.0 `Legacy.svelte`/Props#value.
</script>

<span>{value}</span>
//     ^^^^^ reference local 2

