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

// < end enclosing_range enclosing-ranges-ts 1.0.0 `index.ts`/
