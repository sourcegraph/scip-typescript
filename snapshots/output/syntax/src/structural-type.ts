// < definition syntax 1.0.0 src/`structural-type.ts`/

export function foo(): Promise<{ member: number }> {
//              ^^^ definition syntax 1.0.0 src/`structural-type.ts`/foo().
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//                               ^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/member0:
  return Promise.resolve({ member: 42 })
//       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//               ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/PromiseConstructor#resolve().
//                         ^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/member1:
}
export function bar(): Promise<number> {
//              ^^^ definition syntax 1.0.0 src/`structural-type.ts`/bar().
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
  return foo().then(x => x.member)
//       ^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().
//             ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                  ^ definition local 4
//                       ^ reference local 4
//                         ^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/member0:
}
export function bar2(): Promise<number> {
//              ^^^^ definition syntax 1.0.0 src/`structural-type.ts`/bar2().
//                      ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                      ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                      ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                      ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                      ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
  return foo().then(({ member }) => member)
//       ^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().
//             ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                     ^^^^^^ definition local 10
//                     ^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/member0:
//                                  ^^^^^^ reference local 10
}

type OptionsFlags<Type> = { [Property in keyof Type]: boolean }
//   ^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//                ^^^^ definition syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
//                           ^^^^^^^^ definition local 12
//                                             ^^^^ reference syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
type FeatureFlags = { darkMode: () => void }
//   ^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
//                    ^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/darkMode0:
export type PropertySignature = {
//          ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/PropertySignature#
  'chat/submit': [{ text: { value: string } }]
//^^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/`chat/submit0`:
//                  ^^^^ definition syntax 1.0.0 src/`structural-type.ts`/text0:
//                          ^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/value0:
}
export type FeatureOptions = OptionsFlags<FeatureFlags> // implicitly // type FeatureOptions = { // darkMode: boolean; // } const fo: FeatureOptions = { darkMode: true }; // ^ go to def
//          ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//                           ^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//                                        ^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
export const fo: FeatureOptions = { darkMode: true }
//           ^^ definition syntax 1.0.0 src/`structural-type.ts`/fo.
//               ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//                                  ^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/darkMode1:

