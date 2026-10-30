// language TypeScript
// < definition syntax 1.0.0 src/`overload.d.ts`/
//documentation ```ts
//            > module "overload.d.ts"
//            > ```

// format-options: showDocs

export interface Overloader {
//               ^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#
//               documentation ```ts
//                           > interface Overloader
//                           > ```
  onLiteral(param: 'a'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//documentation ```ts
//            > (method) onLiteral(param: "a"): void
//            > ```
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
//          documentation ```ts
//                      > (parameter) param: "a"
//                      > ```
  onLiteral(param: 'b'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
}

// Ordinary TypeScript names must not be rewritten as generated Svelte names.
export type $$ComponentProps = string
//          ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/$$ComponentProps#
//          documentation ```ts
//                      > type $$ComponentProps
//                      > ```
export type Demo__SvelteComponent_ = number
//          ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Demo__SvelteComponent_#
//          documentation ```ts
//                      > type Demo__SvelteComponent_
//                      > ```
export type __sveltets_2_IsomorphicComponent = boolean
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/__sveltets_2_IsomorphicComponent#
//          documentation ```ts
//                      > type __sveltets_2_IsomorphicComponent
//                      > ```

