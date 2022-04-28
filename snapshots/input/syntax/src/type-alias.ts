type S = string

const s: S = ''

class C<T> {
  t: T
}
type Cstring = C<string>

const cs: Cstring = new C<string>()

class D<T, U> {
  t: T
  u: U
}
type DT<T> = D<T, string> // partially specialized
type DU<U> = D<string, DU<U>> // recursive!

const dt: DT<string> = new D()
const du: DU<string> = new D()
