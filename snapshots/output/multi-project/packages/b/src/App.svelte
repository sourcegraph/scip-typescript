// language Svelte
// < definition @example/b 1.0.0 src/`App.svelte`/

<script lang="ts">
  import Component from '../../a/src/Component.svelte'
//       ^^^^^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/
//                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/
</script>

<Component label="cross-project" />
//^^^^^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/
//         ^^^^^ reference @example/a 1.0.0 src/`Component.svelte`/Props#label.

