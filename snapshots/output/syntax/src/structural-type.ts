  export function foo(): Promise<{ member: number }> {
// definition syntax 1.0.0 src/`structural-type.ts`/
//documentation ```ts\nmodule "structural-type.ts"\n```
//                ^^^ definition syntax 1.0.0 src/`structural-type.ts`/foo().
//                documentation ```ts\nfunction foo(): Promise<{ member: number; }>\n```
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//                                 ^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
//                                 documentation ```ts\n(property) member: number\n```
    return Promise.resolve({ member: 42 })
//         ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//         ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//         ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//         ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//         ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
//                 ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/PromiseConstructor#resolve().
//                           ^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/member0:
//                           documentation ```ts\n(property) member: number\n```
  }
  export function bar(): Promise<number> {
//                ^^^ definition syntax 1.0.0 src/`structural-type.ts`/bar().
//                documentation ```ts\nfunction bar(): Promise<number>\n```
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                       ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
    return foo().then(x => x.member)
//         ^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().
//               ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                    ^ definition local 4
//                    documentation ```ts\n(parameter) x: { member: number; }\n```
//                         ^ reference local 4
//                           ^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
  }
  export function bar2(): Promise<number> {
//                ^^^^ definition syntax 1.0.0 src/`structural-type.ts`/bar2().
//                documentation ```ts\nfunction bar2(): Promise<number>\n```
//                        ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#
//                        ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.iterable.d.ts`/Promise#
//                        ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.promise.d.ts`/Promise.
//                        ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                        ^^^^^^^ reference typescript 5.3.3 lib/`lib.es2018.promise.d.ts`/Promise#
    return foo().then(({ member }) => member)
//         ^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().
//               ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Promise#then().
//                       ^^^^^^ definition local 10
//                       documentation ```ts\n(parameter) member: number\n```
//                       ^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/foo().Promise:typeLiteral0:member.
//                                    ^^^^^^ reference local 10
  }
  
  type OptionsFlags<Type> = { [Property in keyof Type]: boolean }
//     ^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//     documentation ```ts\ntype OptionsFlags\n```
//                  ^^^^ definition syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
//                  documentation ```ts\nType: Type\n```
//                             ^^^^^^^^ definition local 12
//                             documentation ```ts\nProperty: Property\n```
//                                               ^^^^ reference syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#[Type]
  type FeatureFlags = { darkMode: () => void }
//     ^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
//     documentation ```ts\ntype FeatureFlags\n```
//                      ^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#typeLiteral13:darkMode.
//                      documentation ```ts\n(property) darkMode: () => void\n```
  export type FeatureOptions = OptionsFlags<FeatureFlags> // implicitly // type FeatureOptions = { // darkMode: boolean; // } const fo: FeatureOptions = { darkMode: true }; // ^ go to def
//            ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//            documentation ```ts\ntype FeatureOptions\n```
//                             ^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/OptionsFlags#
//                                          ^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/FeatureFlags#
  export const fo: FeatureOptions = { darkMode: true }
//             ^^ definition syntax 1.0.0 src/`structural-type.ts`/fo.
//             documentation ```ts\nvar fo: OptionsFlags<FeatureFlags>\n```
//                 ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`structural-type.ts`/FeatureOptions#
//                                    ^^^^^^^^ definition syntax 1.0.0 src/`structural-type.ts`/darkMode0:
//                                    documentation ```ts\n(property) darkMode: true\n```
  
