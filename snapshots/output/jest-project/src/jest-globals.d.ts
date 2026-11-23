// language TypeScript
// < definition jest-project 1.0.0 src/`jest-globals.d.ts`/

// Minimal declarations of the Jest globals that the tests use, so that this
// project does not need @types/jest. Not a test file.
declare function describe(name: string, body: () => void): void
//               ^^^^^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/describe().
//                        ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/describe().(name)
//                                      ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/describe().(body)
declare function test(name: string, body: () => void): void
//               ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/test().
//                    ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/test().(name)
//                                  ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/test().(body)
declare function it(name: string, body: () => void): void
//               ^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/it().
//                  ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/it().(name)
//                                ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/it().(body)
declare function expect<T>(actual: T): { toBe(expected: T): void }
//               ^^^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/expect().
//                      ^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/expect().[T]
//                         ^^^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/expect().(actual)
//                                 ^ reference jest-project 1.0.0 src/`jest-globals.d.ts`/expect().[T]
//                                       ^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/expect().typeLiteral0:toBe().
//                                            ^^^^^^^^ definition jest-project 1.0.0 src/`jest-globals.d.ts`/expect().typeLiteral0:toBe().(expected)
//                                                      ^ reference jest-project 1.0.0 src/`jest-globals.d.ts`/expect().[T]

