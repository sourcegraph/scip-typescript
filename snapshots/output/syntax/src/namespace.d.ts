  declare namespace a {
//                  ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/
//                  documentation ```ts\ntypeof a\n```
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/hello().
//           documentation ```ts\n() => string\n```
    interface Interface {
//            ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
//            documentation ```ts\nInterface\n```
      hello: string
//    ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#hello.
//    documentation ```ts\nstring\n```
    }
    var i: Interface
//      ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/i.
//      documentation ```ts\nInterface\n```
//         ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
  }
  
