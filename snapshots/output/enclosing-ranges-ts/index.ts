// language TypeScript
// < definition enclosing-ranges-ts 1.0.0 `index.ts`/

// format-options: showRanges

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/Foo#
// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/
interface Foo {
//        ^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Foo#
  bar: string
//^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Foo#bar.
  test: () => void
//^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Foo#test.
}
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/Foo#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/Single#
interface Single<T> {
//        ^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Single#
//               ^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Single#[T]
  t: T
//^ definition enclosing-ranges-ts 1.0.0 `index.ts`/Single#t.
//   ^ reference enclosing-ranges-ts 1.0.0 `index.ts`/Single#[T]
}
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/Single#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#
enum SimpleEnum {
//   ^^^^^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#
  Case1,
//^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#Case1.
  Case2,
//^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#Case2.
}
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/SimpleTypeAlias#
type SimpleTypeAlias = SimpleEnum
//   ^^^^^^^^^^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/SimpleTypeAlias#
//                     ^^^^^^^^^^ reference enclosing-ranges-ts 1.0.0 `index.ts`/SimpleEnum#
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/SimpleTypeAlias#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/ComplexTypeAlias#
type ComplexTypeAlias<T> = Single<Single<T>>
//   ^^^^^^^^^^^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/ComplexTypeAlias#
//                    ^ definition enclosing-ranges-ts 1.0.0 `index.ts`/ComplexTypeAlias#[T]
//                         ^^^^^^ reference enclosing-ranges-ts 1.0.0 `index.ts`/Single#
//                                ^^^^^^ reference enclosing-ranges-ts 1.0.0 `index.ts`/Single#
//                                       ^ reference enclosing-ranges-ts 1.0.0 `index.ts`/ComplexTypeAlias#[T]
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/ComplexTypeAlias#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/PageLoad#
type PageLoad = () => Promise<number>
//   ^^^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/PageLoad#
//                    ^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Promise#
//                    ^^^^^^^ reference typescript 6.0.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                    ^^^^^^^ reference typescript 6.0.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                    ^^^^^^^ reference typescript 6.0.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                    ^^^^^^^ reference typescript 6.0.3 lib/`lib.es2018.promise.d.ts`/Promise#
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/PageLoad#

// < start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/load.
export const load: PageLoad = async () => {
//           ^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/load.
//                 ^^^^^^^^ reference enclosing-ranges-ts 1.0.0 `index.ts`/PageLoad#
  return 42
}
// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/load.

//    ⌄ start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/first.
const first = () => 1,
//    ^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/first.
//    ^ end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/first.
// ⌄ start enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/second.
  second = () => 2
//^^^^^^ definition enclosing-ranges-ts 1.0.0 `index.ts`/second.
// ^ end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/second.

// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/
