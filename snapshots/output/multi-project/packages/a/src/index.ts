// < definition @example/a 1.0.0 file://src/index.ts
//documentation ```ts
//            > module "index.ts"
//            > ```

// format-options: showDocs

export function a(): string {
//              ^ definition @example/a 1.0.0 src/`index.ts`/a().
//              documentation ```ts
//                          > function a(): string
//                          > ```
  return ''
}

