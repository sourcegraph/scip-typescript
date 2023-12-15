// < definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/

type S = string
//   ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/S#

const s: S = ''
//    ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/s.
//       ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/S#

class C<T> {
//    ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#
//      ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#[T]
  t: T
//^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#t.
//   ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#[T]
}
type Cstring = C<string>
//   ^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/Cstring#
//             ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#

const cs: Cstring = new C<string>()
//    ^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/cs.
//        ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/Cstring#
//                      ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/C#

class D<T, U> {
//    ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#
//      ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#[T]
//         ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#[U]
  t: T
//^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#t.
//   ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#[T]
  u: U
//^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#u.
//   ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#[U]
}
type DT<T> = D<T, string> // partially specialized
//   ^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DT#
//      ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DT#[T]
//           ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#
//             ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DT#[T]
type DU<U> = D<string, DU<U>> // recursive!
//   ^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DU#
//      ^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DU#[U]
//           ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#
//                     ^^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DU#
//                        ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DU#[U]

const dt: DT<string> = new D()
//    ^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/dt.
//        ^^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DT#
//                         ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#
const du: DU<string> = new D()
//    ^^ definition scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/du.
//        ^^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/DU#
//                         ^ reference scip-typescript npm syntax 1.0.0 src/`type-alias.ts`/D#

