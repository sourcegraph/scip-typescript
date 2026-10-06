// language TypeScript
// < definition syntax 1.0.0 src/`surrogates.ts`/
//documentation ```ts
//            > module "surrogates.ts"
//            > ```

// format-options: showDocs

export const high = '\ud800'
//           ^^^^ definition syntax 1.0.0 src/`surrogates.ts`/high.
//           documentation ```ts
//                       > var high: "�"
//                       > ```
export const low = '\udfff'
//           ^^^ definition syntax 1.0.0 src/`surrogates.ts`/low.
//           documentation ```ts
//                       > var low: "�"
//                       > ```
export const pair = '\ud83d\ude00'
//           ^^^^ definition syntax 1.0.0 src/`surrogates.ts`/pair.
//           documentation ```ts
//                       > var pair: "😀"
//                       > ```
export const mixed = '\ud800\ud83d\ude00\udfff'
//           ^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/mixed.
//           documentation ```ts
//                       > var mixed: "�😀�"
//                       > ```

export const adjacent = '\ud800\ud800\udc00\udc00'
//           ^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/adjacent.
//           documentation ```ts
//                       > var adjacent: "�𐀀�"
//                       > ```
export const unicode = 'ASCII café 中文 😀'
//           ^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/unicode.
//           documentation ```ts
//                       > var unicode: "ASCII café 中文 😀"
//                       > ```
export const escaped = '\\ud800'
//           ^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/escaped.
//           documentation ```ts
//                       > var escaped: "\\ud800"
//                       > ```

export function C() {}
//              ^ definition syntax 1.0.0 src/`surrogates.ts`/C().
//              documentation ```ts
//                          > function C(): void
//                          > ```
const prototype = (C.prototype = {
//    ^^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/prototype.
//    documentation ```ts
//                > var prototype: { '\uD800': number; 'low\...
//                > ```
//                 ^ reference syntax 1.0.0 src/`surrogates.ts`/C().
//                   ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
  '\ud800': 1,
//^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/C().`�`.
//documentation ```ts
//            > (property) '\ud800': number
//            > ```
  'low\udfff': 2,
//^^^^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/C().`low�`.
//documentation ```ts
//            > (property) 'low\udfff': number
//            > ```
  '\ud83d\ude00': 3,
//^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/C().`😀`.
//documentation ```ts
//            > (property) '\ud83d\ude00': number
//            > ```
  '\\ud800': 4,
//^^^^^^^^^ definition syntax 1.0.0 src/`surrogates.ts`/C().`\ud800`.
//documentation ```ts
//            > (property) '\\ud800': number
//            > ```
})
prototype['\ud800']
//^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/prototype.
//        ^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/C().`�`.
prototype['low\udfff']
//^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/prototype.
//        ^^^^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/C().`low�`.
prototype['\ud83d\ude00']
//^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/prototype.
//        ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/C().`😀`.
prototype['\\ud800']
//^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/prototype.
//        ^^^^^^^^^ reference syntax 1.0.0 src/`surrogates.ts`/C().`\ud800`.

