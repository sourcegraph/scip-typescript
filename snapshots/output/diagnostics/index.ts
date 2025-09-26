// < definition diagnostics 0.0.1 `index.ts`/

/** @deprecated This class is deprecated */
class Foo {}
//    ^^^ definition diagnostics 0.0.1 `index.ts`/Foo#
//    diagnostic Information:
//    > This class is deprecated

/** @deprecated This function is deprecated */
function bar() {}
//       ^^^ definition diagnostics 0.0.1 `index.ts`/bar().
//       diagnostic Information:
//       > This function is deprecated

function main() {
//       ^^^^ definition diagnostics 0.0.1 `index.ts`/main().
  new Foo()
//    ^^^ reference diagnostics 0.0.1 `index.ts`/Foo#
//    diagnostic Information:
//    > This class is deprecated
  bar()
//^^^ reference diagnostics 0.0.1 `index.ts`/bar().
//diagnostic Information:
//> This function is deprecated
}

