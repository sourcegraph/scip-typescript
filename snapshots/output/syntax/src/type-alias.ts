  type S = string
//     ^ definition syntax 1.0.0 src/`type-alias.ts`/S#
//     documentation ```ts\nstring\n```
//     documentation 
  
  const s: S = ''
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/s.
//      documentation ```ts\nstring\n```
//      documentation 
//         ^ reference syntax 1.0.0 src/`type-alias.ts`/S#
  
  class C<T> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/C#
//      documentation ```ts\nC<T>\n```
//      documentation 
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/C#[T]
//        documentation ```ts\nT\n```
//        documentation 
    t: T
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/C#t.
//  documentation ```ts\nT\n```
//  documentation 
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/C#[T]
  }
  type Cstring = C<string>
//     ^^^^^^^ definition syntax 1.0.0 src/`type-alias.ts`/Cstring#
//     documentation ```ts\nCstring\n```
//     documentation 
//               ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  const cs: Cstring = new C<string>()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/cs.
//      documentation ```ts\nCstring\n```
//      documentation 
//          ^^^^^^^ reference syntax 1.0.0 src/`type-alias.ts`/Cstring#
//                        ^ reference syntax 1.0.0 src/`type-alias.ts`/C#
  
  class D<T, U> {
//      ^ definition syntax 1.0.0 src/`type-alias.ts`/D#
//      documentation ```ts\nD<T, U>\n```
//      documentation 
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[T]
//        documentation ```ts\nT\n```
//        documentation 
//           ^ definition syntax 1.0.0 src/`type-alias.ts`/D#[U]
//           documentation ```ts\nU\n```
//           documentation 
    t: T
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/D#t.
//  documentation ```ts\nT\n```
//  documentation 
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[T]
    u: U
//  ^ definition syntax 1.0.0 src/`type-alias.ts`/D#u.
//  documentation ```ts\nU\n```
//  documentation 
//     ^ reference syntax 1.0.0 src/`type-alias.ts`/D#[U]
  }
  type DT<T> = D<T, string> // partially specialized
//     ^^ definition syntax 1.0.0 src/`type-alias.ts`/DT#
//     documentation ```ts\nDT<T>\n```
//     documentation 
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/DT#[T]
//        documentation ```ts\nT\n```
//        documentation 
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//               ^ reference syntax 1.0.0 src/`type-alias.ts`/DT#[T]
  type DU<U> = D<string, DU<U>> // recursive!
//     ^^ definition syntax 1.0.0 src/`type-alias.ts`/DU#
//     documentation ```ts\nDU<U>\n```
//     documentation 
//        ^ definition syntax 1.0.0 src/`type-alias.ts`/DU#[U]
//        documentation ```ts\nU\n```
//        documentation 
//             ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
//                       ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                          ^ reference syntax 1.0.0 src/`type-alias.ts`/DU#[U]
  
  const dt: DT<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/dt.
//      documentation ```ts\nDT<string>\n```
//      documentation 
//          ^^ reference syntax 1.0.0 src/`type-alias.ts`/DT#
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
  const du: DU<string> = new D()
//      ^^ definition syntax 1.0.0 src/`type-alias.ts`/du.
//      documentation ```ts\nDU<string>\n```
//      documentation 
//          ^^ reference syntax 1.0.0 src/`type-alias.ts`/DU#
//                           ^ reference syntax 1.0.0 src/`type-alias.ts`/D#
  
