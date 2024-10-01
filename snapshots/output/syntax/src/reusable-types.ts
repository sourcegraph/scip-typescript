// < definition syntax 1.0.0 src/`reusable-types.ts`/

// Reusable types for other snapshot tests

export interface Option<A> {
//               ^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#
//                      ^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#[A]
  value?: A
//^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#value.
//        ^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#[A]
}

export interface Numbers {
//               ^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Numbers#
  property: number
//^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
}
export interface Strings {
//               ^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Strings#
  property2: string
//^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
}
export type Configuration = Numbers & Strings
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//                          ^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#
//                                    ^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#

export class GenericClass<A> {
//           ^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
//                        ^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
  constructor(public readonly values: A[]) {}
//^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().
//                            ^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().(values)
//                                    ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
  public map(fn: (a: A) => A): A[] {
//       ^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().
//           ^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().(fn)
//                ^ definition local 1
//                   ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
//                         ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
//                             ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
    return this.values.map(a => fn(a))
//              ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().(values)
//                     ^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Array#map().
//                         ^ definition local 5
//                              ^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().(fn)
//                                 ^ reference local 5
  }
}

export interface Superinterface {
//               ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
  property: string
//^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
  interfaceMethod(): string
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
}
export interface GenericInterface<T> {
//               ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
//                                ^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#[T]
  property: T
//^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
//          ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#[T]
  interfaceMethod(): string
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
}

