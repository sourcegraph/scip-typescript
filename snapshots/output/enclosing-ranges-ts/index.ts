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

// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/
