// < definition syntax 1.0.0 file://src/type-alias.ts

type S = string
//   ^ definition syntax 1.0.0 src/`type-alias.ts`/S#

const s: S = ''
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/s.
//       ^ reference syntax 1.0.0 src/`type-alias.ts`/S#

class C<T> {
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/C#
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/C#[T]
  t: T
//^ definition syntax 1.0.0 src/`type-alias.ts`/C#t.
//   ^ reference syntax 1.0.0 src/`type-alias.ts`/C#[T]
}
type Cstring = C<string>
//   ^^^^^^^ definition syntax 1.0.0 src/`type-alias.ts`/Cstring#
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/C#

const cs: Cstring = new C<string>()
//    ^^ definition syntax 1.0.0 src/`type-alias.ts`/cs.
//        ^^^^^^^ reference syntax 1.0.0 src/`type-alias.ts`/Cstring#
//                      ^ reference syntax 1.0.0 src/`type-alias.ts`/C#

class D<T, U> {
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/D#
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[T]
//         ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[U]
  t: T
//^ definition syntax 1.0.0 src/`type-alias.ts`/D#t.
//   ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[T]
  u: U
//^ definition syntax 1.0.0 src/`type-alias.ts`/D#u.
//   ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[U]
}
type DT<T> = D<T, string> // partially specialized
//   ^^ definition syntax 1.0.0 src/`type-alias.ts`/DT#
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/DT#[T]
//           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/DT#[T]
type DU<U> = D<string, DU<U>> // recursive!
//   ^^ definition syntax 1.0.0 src/`type-alias.ts`/DU#
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/DU#[U]
//           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//                     ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                        ^ reference syntax 1.0.0 src/`type-alias.ts`/DU#[U]

const dt: DT<string> = new D()
//    ^^ definition syntax 1.0.0 src/`type-alias.ts`/dt.
//        ^^ reference syntax 1.0.0 src/`type-alias.ts`/DT#
//                         ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
const du: DU<string> = new D()
//    ^^ definition syntax 1.0.0 src/`type-alias.ts`/du.
//        ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                         ^ reference syntax 1.0.0 src/`type-alias.ts`/D#

