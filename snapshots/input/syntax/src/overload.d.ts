// format-options: showDocs

export interface Overloader {
  onLiteral(param: 'a'): void
  onLiteral(param: 'b'): void
}

// Ordinary TypeScript names must not be rewritten as generated Svelte names.
export type $$ComponentProps = string
export type Demo__SvelteComponent_ = number
export type __sveltets_2_IsomorphicComponent = boolean
