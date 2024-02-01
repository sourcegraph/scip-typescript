// < definition syntax 1.0.0 src/`namespace.ts`/

export declare namespace a {
//                       ^ definition syntax 1.0.0 src/`namespace.ts`/a/
  function hello(): string
//         ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/hello().
  interface Interface {
//          ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/Interface#
    hello: string
//  ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/hello0:
  }
  var i: Interface
//    ^ definition syntax 1.0.0 src/`namespace.ts`/a/i.
//       ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.ts`/a/Interface#
  export const value = 1
//             ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/value.
}

