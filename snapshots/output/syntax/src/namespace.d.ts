  declare namespace a {
//                  ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/
//                  documentation ```ts\ntypeof a\n```
//                  documentation 
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/hello().
//           documentation ```ts\n() => string\n```
//           documentation 
    interface Interface {
//            ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
//            documentation ```ts\nInterface\n```
//            documentation 
      hello: string
//    ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#hello.
//    documentation ```ts\nstring\n```
//    documentation 
    }
    var i: Interface
//      ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/i.
//      documentation ```ts\nInterface\n```
//      documentation 
//         ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
  }
  
