  export namespace example {
//                 ^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/
    class Server {
//        ^^^^^^ reference syntax 1.0.0 src/`issue-45.d.ts`/example/Server#
      // This overloaded method reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/45
      addListener(name: 'a'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
      addListener(name: 'b'): void
//    ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//                ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
    }
  }
  
