// < definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/

export declare namespace a {
//                       ^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/
  function hello(): string
//         ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/hello().
  interface Interface {
//          ^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/Interface#
    hello: string
//  ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/Interface#hello.
  }
  var i: Interface
//    ^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/i.
//       ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/Interface#
  export const value = 1
//             ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`namespace.ts`/a/value.
}

