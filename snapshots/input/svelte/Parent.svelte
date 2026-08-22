<script lang="ts">
  import { writable } from 'svelte/store'
  import Child from './Child.svelte'
  import Generic from './Generic.svelte'
  import Legacy from './Legacy.svelte'
  import Plain from './Plain.svelte'
  import { format, type User } from './helper'
  import { importedCount } from './stores'

  const user: User = { name: 'Ada' }
  let clicks = $state(1)
  const count = writable(2)
  let generic: Generic<User> | undefined = $state()

  function increment(): void {
    clicks += 1
  }
</script>

{#snippet greeting(name: string)}
  <strong>Hello {name}</strong>
{/snippet}

<button onclick={increment}>Increment</button>
<Child label={format(user.name)} count={clicks} />
<Generic bind:this={generic} value={user} />
<Legacy value="legacy" />
<Plain enabled={true} />
<p>{$count}</p>
<p>{$importedCount}</p>
{@render greeting(user.name)}
