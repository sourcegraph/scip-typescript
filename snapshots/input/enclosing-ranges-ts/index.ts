// format-options: showRanges

interface Foo {
  bar: string
  test: () => void
}

interface Single<T> {
  t: T
}

enum SimpleEnum {
  Case1,
  Case2,
}

type SimpleTypeAlias = SimpleEnum

type ComplexTypeAlias<T> = Single<
  Single<T>
>