  export namespace example {
//                 ^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/
//                 documentation ```ts\ntypeof example\n```
//                 documentation 
    class Server {
//        ^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#
//        documentation ```ts\nServer\n```
//        documentation 
      // This overloaded method reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/45
      addListener(name: 'a'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//    documentation ```ts\n{ (name: "a"): void; (name: "b"): void; }\n```
//    documentation 
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
//                documentation ```ts\n"b"\n```
//                documentation 
      addListener(name: 'b'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//    documentation ```ts\n{ (name: "a"): void; (name: "b"): void; }\n```
//    documentation 
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
//                documentation ```ts\n"b"\n```
//                documentation 
    }
  }
  
