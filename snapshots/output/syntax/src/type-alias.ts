  type S = string
//     ^ definition local 0
  
  const s: S = ""
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/s.
//         ^ reference local 0
  
  class C<T> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/C#
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/C#[T]
      t: T
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/C#t.
//       ^ reference syntax 1.0.0 src/`type-alias.ts`/C#[T]
  }
  type Cstring = C<string>
//     ^^^^^^^ definition local 1
//               ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  const cs: Cstring = new C<string>()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/cs.
//          ^^^^^^^ reference local 1
//                        ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  class D<T, U> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/D#
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[T]
//           ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[U]
      t: T
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/D#t.
//       ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[T]
      u: U
//    ^ definition syntax 1.0.0 src/`type-alias.ts`/D#u.
//       ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[U]
  }
  type DT<T> = D<T, string> // partially specialized
//     ^^ definition local 2
//        ^ definition local 3
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//               ^ reference local 3
  type DU<U> = D<string, DU<U>> // recursive!
//     ^^ definition local 4
//        ^ definition local 5
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//                       ^^ reference local 4
//                          ^ reference local 5
  
  const dt: DT<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/dt.
//          ^^ reference local 2
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
  const du: DU<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/du.
//          ^^ reference local 4
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
