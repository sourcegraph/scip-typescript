/** @deprecated This class is deprecated */
class Foo {}

/** @deprecated This function is deprecated */
function bar() {}

/**
 * @deprecated This is a function that has
 * multiple lines and is also deprecated. Make
 * sure to reference {@link bar} for some reason
 */
function car() {}

function main() {
  new Foo()
  bar()
}
