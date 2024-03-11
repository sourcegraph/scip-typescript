// < definition syntax 1.0.0 src/`string-literals.ts`/

interface SomeInterface {
//        ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
  a: number
//^ definition syntax 1.0.0 src/`string-literals.ts`/a0:
  b: number
//^ definition syntax 1.0.0 src/`string-literals.ts`/b0:
  c: number
//^ definition syntax 1.0.0 src/`string-literals.ts`/c0:
}
// "Go to definition" does not work for the 'a', 'b' and 'c' string literals
// below when using tsserver so it's fine that scip-typescript does not emit
// occurrences here either.
export type OmitInterface = Omit<SomeInterface, 'a' | 'b'>
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/OmitInterface#
//                          ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Omit#
//                               ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
export type PickInterface = Pick<SomeInterface, 'b' | 'c'>
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`string-literals.ts`/PickInterface#
//                          ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Pick#
//                               ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`string-literals.ts`/SomeInterface#

