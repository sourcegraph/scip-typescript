  declare namespace a {
//                  ^ definition example 1.0.0 src/namespace.d.ts/a/
    function hello(): string
//           ^^^^^ definition example 1.0.0 src/namespace.d.ts/a/hello().
    interface Interface {
//            ^^^^^^^^^ definition example 1.0.0 src/namespace.d.ts/a/Interface#
      hello: string
//    ^^^^^ definition example 1.0.0 src/namespace.d.ts/a/Interface#hello.
    }
    var i: Interface
//      ^ definition example 1.0.0 src/namespace.d.ts/a/i.
//         ^^^^^^^^^ reference example 1.0.0 src/namespace.d.ts/a/Interface#
  }
  
