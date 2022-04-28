  export namespace example {
//                 ^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/
//                 documentation ```ts\nexample: typeof example\n```
    class Server {
//        ^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#
//        documentation ```ts\nclass Server\n```
      // This overloaded method reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/45
      addListener(name: 'a'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//    documentation ```ts\n(method) addListener(name: "a"): void\n```
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
//                documentation ```ts\n(parameter) name: "b"\n```
      addListener(name: 'b'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//    documentation ```ts\n(method) addListener(name: "a"): void\n```
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
//                documentation ```ts\n(parameter) name: "b"\n```
    }
  }
  
