// language TypeScript
// < definition @example/a 1.0.0 src/`index.ts`/
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

export function localResult() {
//              ^^^^^^^^^^^ definition @example/a 1.0.0 src/`index.ts`/localResult().
//              documentation ```ts
//                          > function localResult(): LocalResult
//                          > ```
  interface LocalResult {
//          ^^^^^^^^^^^ definition local 0
//          documentation ```ts
//                      > interface LocalResult
//                      > ```
    value: string
//  ^^^^^ definition local 1
//  documentation ```ts
//              > (property) value: string
//              > ```
  }
  return { value: '' } as LocalResult
//         ^^^^^ reference local 1
//                        ^^^^^^^^^^^ reference local 0
}

