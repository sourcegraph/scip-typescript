// < definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/

interface SomeInterface {
//        ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
  a: number
//^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#a.
  b: number
//^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#b.
  c: number
//^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#c.
}
// "Go to definition" does not work for the 'a', 'b' and 'c' string literals
// below when using tsserver so it's fine that scip-typescript does not emit
// occurrences here either.
export type OmitInterface = Omit<SomeInterface, 'a' | 'b'>
//          ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/OmitInterface#
//                          ^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Omit#
//                               ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#
export type PickInterface = Pick<SomeInterface, 'b' | 'c'>
//          ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/PickInterface#
//                          ^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Pick#
//                               ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`string-literals.ts`/SomeInterface#

