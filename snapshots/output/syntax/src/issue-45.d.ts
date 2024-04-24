// < definition syntax 1.0.0 file://src/issue-45.d.ts

export namespace example {
//               ^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/
  class Server {
//      ^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#
    // This overloaded method reproduces the following issue https://github.com/sourcegraph/scip-typescript/issues/45
    addListener(name: 'a'): void
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//              ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
    addListener(name: 'b'): void
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//              ^^^^ definition syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
  }
}

