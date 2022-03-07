  declare namespace a {
//                  ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/hello().
    interface Interface {
//            ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
      hello: string
//    ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#hello.
    }
    var i: Interface
//      ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/i.
//         ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
  }
  
