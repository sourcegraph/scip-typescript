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
//documentation ```ts
//            > (method) onLiteral(param: "b"): void
//            > ```
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
//          documentation ```ts
//                      > (parameter) param: "a"
//                      > ```
//          documentation ```ts
//                      > (parameter) param: "b"
//                      > ```
  onLiteral(param: 'b'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
}

