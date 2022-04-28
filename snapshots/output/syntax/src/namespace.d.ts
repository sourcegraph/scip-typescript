  declare namespace a {
//                  ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/
//                  documentation ```ts\na: typeof a\n```
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/hello().
//           documentation ```ts\nfunction hello(): string\n```
    interface Interface {
//            ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
//            documentation ```ts\ninterface Interface\n```
      hello: string
//    ^^^^^ definition syntax 1.0.0 src/`namespace.d.ts`/a/Interface#hello.
//    documentation ```ts\n(property) hello: string\n```
    }
    var i: Interface
//      ^ definition syntax 1.0.0 src/`namespace.d.ts`/a/i.
//      documentation ```ts\nvar i: Interface\n```
//         ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.d.ts`/a/Interface#
  }
  
