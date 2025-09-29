// < definition diagnostics 0.0.1 `index.ts`/

/** @deprecated This class is deprecated */
class Foo {}
//    ^^^ definition diagnostics 0.0.1 `index.ts`/Foo#

/** @deprecated This function is deprecated */
function bar() {}
//       ^^^ definition diagnostics 0.0.1 `index.ts`/bar().

/**
 * @deprecated This is a function that has
 * multiple lines and is also deprecated. Make
 * sure to reference {@link bar} for some reason
 */
function car() {}
//       ^^^ definition diagnostics 0.0.1 `index.ts`/car().

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

