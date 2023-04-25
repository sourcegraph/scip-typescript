  export declare namespace a {
// definition syntax 1.0.0 src/`namespace.ts`/
//documentation ```ts\nmodule "namespace.ts"\n```
//                         ^ definition syntax 1.0.0 src/`namespace.ts`/a/
//                         documentation ```ts\na: typeof a\n```
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/hello().
//           documentation ```ts\nfunction hello(): string\n```
    interface Interface {
//            ^^^^^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/Interface#
//            documentation ```ts\ninterface Interface\n```
      hello: string
//    ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/Interface#hello.
//    documentation ```ts\n(property) hello: string\n```
    }
    var i: Interface
//      ^ definition syntax 1.0.0 src/`namespace.ts`/a/i.
//      documentation ```ts\nvar i: Interface\n```
//         ^^^^^^^^^ reference syntax 1.0.0 src/`namespace.ts`/a/Interface#
    export const value = 1
//               ^^^^^ definition syntax 1.0.0 src/`namespace.ts`/a/value.
//               documentation ```ts\nvar value: 1\n```
  }
  
