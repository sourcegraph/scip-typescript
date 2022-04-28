  type S = string
//     ^ definition syntax 1.0.0 src/`type-alias.ts`/S#
//     documentation ```ts\ntype S\n```
  
  const s: S = ''
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/s.
//      documentation ```ts\nvar s: string\n```
//         ^ reference syntax 1.0.0 src/`type-alias.ts`/S#
  
  class C<T> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/C#
//      documentation ```ts\nclass C\n```
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/C#[T]
//        documentation ```ts\nT: T\n```
    t: T
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/C#t.
//  documentation ```ts\n(property) t: T\n```
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/C#[T]
  }
  type Cstring = C<string>
//     ^^^^^^^ definition syntax 1.0.0 src/`type-alias.ts`/Cstring#
//     documentation ```ts\ntype Cstring\n```
//               ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  const cs: Cstring = new C<string>()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/cs.
//      documentation ```ts\nvar cs: Cstring\n```
//          ^^^^^^^ reference syntax 1.0.0 src/`type-alias.ts`/Cstring#
//                        ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  class D<T, U> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/D#
//      documentation ```ts\nclass D\n```
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[T]
//        documentation ```ts\nT: T\n```
//           ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[U]
//           documentation ```ts\nU: U\n```
    t: T
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/D#t.
//  documentation ```ts\n(property) t: T\n```
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[T]
    u: U
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/D#u.
//  documentation ```ts\n(property) u: U\n```
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[U]
  }
  type DT<T> = D<T, string> // partially specialized
//     ^^ definition syntax 1.0.0 src/`type-alias.ts`/DT#
//     documentation ```ts\ntype DT\n```
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/DT#[T]
//        documentation ```ts\nT: T\n```
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//               ^ reference syntax 1.0.0 src/`type-alias.ts`/DT#[T]
  type DU<U> = D<string, DU<U>> // recursive!
//     ^^ definition syntax 1.0.0 src/`type-alias.ts`/DU#
//     documentation ```ts\ntype DU\n```
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/DU#[U]
//        documentation ```ts\nU: U\n```
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//                       ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                          ^ reference syntax 1.0.0 src/`type-alias.ts`/DU#[U]
  
  const dt: DT<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/dt.
//      documentation ```ts\nvar dt: DT<string>\n```
//          ^^ reference syntax 1.0.0 src/`type-alias.ts`/DT#
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
  const du: DU<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/du.
//      documentation ```ts\nvar du: DU<string>\n```
//          ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
  
