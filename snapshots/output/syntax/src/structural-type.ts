// < definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/

export function foo(): Promise<{ member: number }> {
//              ^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//                               ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
  return Promise.resolve({ member: 42 })
//       ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//       ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//       ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//       ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//       ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//               ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/PromiseConstructor#resolve().
//                         ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/member0:
}
export function bar(): Promise<number> {
//              ^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/bar().
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                     ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
  return foo().then(x => x.member)
//       ^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().
//             ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                  ^ definition local 4
//                       ^ reference local 4
//                         ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
}
export function bar2(): Promise<number> {
//              ^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/bar2().
//                      ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                      ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                      ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                      ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                      ^^^^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
  return foo().then(({ member }) => member)
//       ^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().
//             ^^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                     ^^^^^^ definition local 10
//                     ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
//                                  ^^^^^^ reference local 10
}

type OptionsFlags<Type> = { [Property in keyof Type]: boolean }
//   ^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//                ^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
//                           ^^^^^^^^ definition local 12
//                                             ^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
type FeatureFlags = { darkMode: () => void }
//   ^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
//                    ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#typeLiteral13:darkMode.
export type FeatureOptions = OptionsFlags<FeatureFlags> // implicitly // type FeatureOptions = { // darkMode: boolean; // } const fo: FeatureOptions = { darkMode: true }; // ^ go to def
//          ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//                           ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//                                        ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
export const fo: FeatureOptions = { darkMode: true }
//           ^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/fo.
//               ^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//                                  ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`structural-type.ts`/darkMode0:

