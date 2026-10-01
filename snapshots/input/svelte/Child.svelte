<script lang="ts">
  let { label, count = 0 }: { label: string; count?: number } = $props()
  const doubled = $derived(count * 2)
</script>

<button>{label}: {doubled}</button>
