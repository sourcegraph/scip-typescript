// language TypeScript
// < definition syntax 1.0.0 src/`overload.d.ts`/
//signature_documentation typescript
//            > module "overload.d.ts"

// format-options: showDocs

export interface Overloader {
//               ^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#
//               signature_documentation typescript
//                           > interface Overloader
  onLiteral(param: 'a'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//signature_documentation typescript
//            > (method) onLiteral(param: "a"): void
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
//          signature_documentation typescript
//                      > (parameter) param: "a"
  onLiteral(param: 'b'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
}

// Ordinary TypeScript names must not be rewritten as generated Svelte names.
export type $$ComponentProps = string
//          ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/$$ComponentProps#
//          signature_documentation typescript
//                      > type $$ComponentProps
export type Demo__SvelteComponent_ = number
//          ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Demo__SvelteComponent_#
//          signature_documentation typescript
//                      > type Demo__SvelteComponent_
export type __sveltets_2_IsomorphicComponent = boolean
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/__sveltets_2_IsomorphicComponent#
//          signature_documentation typescript
//                      > type __sveltets_2_IsomorphicComponent

