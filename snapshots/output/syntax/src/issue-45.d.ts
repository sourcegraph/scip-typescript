// < definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/

export namespace example {
//               ^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/
  class Server {
//      ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/Server#
    // This overloaded method reproduces the following issue https://github.com/sourcegraph/scip-typescript/issues/45
    addListener(name: 'a'): void
//  ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//              ^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
    addListener(name: 'b'): void
//  ^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().
//              ^^^^ definition scip-typescript npm syntax 1.0.0 src/`issue-45.d.ts`/example/Server#addListener().(name)
  }
}

