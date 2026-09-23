// language TypeScript
// < definition syntax 1.0.0 src/`surrogates.ts`/
//documentation ```ts
//            > module "surrogates.ts"
//            > ```

// format-options: showDocs

export const high = '\ud800'
//           ^^^^ definition syntax 1.0.0 src/`surrogates.ts`/high.
//           documentation ```ts
//                       > var high: "\ud800"
//                       > ```
export const low = '\udfff'
//           ^^^ definition syntax 1.0.0 src/`surrogates.ts`/low.
//           documentation ```ts
//                       > var low: "\udfff"
//                       > ```
export const pair = '\ud83d\ude00'
//           ^^^^ definition syntax 1.0.0 src/`surrogates.ts`/pair.
//           documentation ```ts
//                       > var pair: "😀"
//                       > ```
export const mixed = '\ud800\ud83d\ude00\udfff'
//           ^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/mixed.
//           documentation ```ts
//                       > var mixed: "\ud800😀\udfff"
//                       > ```

