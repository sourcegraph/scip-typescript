// language Svelte
// < definition svelte-example 1.0.0 `Plain.svelte`/

<script>
  export let enabled = false
//           ^^^^^^^ definition local 2
//           ^^^^^^^ definition svelte-example 1.0.0 `Plain.svelte`/Props#enabled.
</script>

{#if enabled}
//   ^^^^^^^ reference local 2
  <p>enabled</p>
{/if}

