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

type ComplexTypeAlias<T> = Single<Single<T>>

type PageLoad = () => Promise<number>

export const load: PageLoad = async () => {
  return 42
}

const first = () => 1,
  second = () => 2
