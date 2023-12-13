  // Reusable types for other snapshot tests
// definition syntax 1.0.0 src/`reusable-types.ts`/
//documentation ```ts\nmodule "reusable-types.ts"\n```
  
  export interface Option<A> {
//                 ^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#
//                 documentation ```ts\ninterface Option\n```
//                        ^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#[A]
//                        documentation ```ts\nA: A\n```
    value?: A
//  ^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Option#value.
//  documentation ```ts\n(property) value: A\n```
//          ^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#[A]
  }
  
  export interface Numbers {
//                 ^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Numbers#
//                 documentation ```ts\ninterface Numbers\n```
    property: number
//  ^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Numbers#property.
//  documentation ```ts\n(property) property: number\n```
  }
  export interface Strings {
//                 ^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Strings#
//                 documentation ```ts\ninterface Strings\n```
    property2: string
//  ^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Strings#property2.
//  documentation ```ts\n(property) property2: string\n```
  }
  export type Configuration = Numbers & Strings
//            ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Configuration#
//            documentation ```ts\ntype Configuration\n```
//                            ^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Numbers#
//                                      ^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Strings#
  
  export class GenericClass<A> {
//             ^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#
//             documentation ```ts\nclass GenericClass\n```
//                          ^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
//                          documentation ```ts\nA: A\n```
    constructor(public readonly values: A[]) {}
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().
//  documentation ```ts\nconstructor<A>(values: A[]): GenericClass<A>\n```
//                              ^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().(values)
//                              documentation ```ts\n(property) values: A[]\n```
//                                      ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
    public map(fn: (a: A) => A): A[] {
//         ^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().
//         documentation ```ts\n(method) map(fn: (a: A) => A): A[]\n```
//             ^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().(fn)
//             documentation ```ts\n(parameter) fn: (a: A) => A\n```
//                  ^ definition local 1
//                  documentation ```ts\n(parameter) a: A\n```
//                     ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
//                           ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
//                               ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#[A]
      return this.values.map(a => fn(a))
//                ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#`<constructor>`().(values)
//                       ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                           ^ definition local 5
//                           documentation ```ts\n(parameter) a: A\n```
//                                ^^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericClass#map().(fn)
//                                   ^ reference local 5
    }
  }
  
  export interface Superinterface {
//                 ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
//                 documentation ```ts\ninterface Superinterface\n```
    property: string
//  ^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
//  documentation ```ts\n(property) property: string\n```
    interfaceMethod(): string
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
//  documentation ```ts\n(method) interfaceMethod() => string\n```
  }
  export interface GenericInterface<T> {
//                 ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#
//                 documentation ```ts\ninterface GenericInterface\n```
//                                  ^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#[T]
//                                  documentation ```ts\nT: T\n```
    property: T
//  ^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#property.
//  documentation ```ts\n(property) property: T\n```
//            ^ reference syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#[T]
    interfaceMethod(): string
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`reusable-types.ts`/GenericInterface#interfaceMethod().
//  documentation ```ts\n(method) interfaceMethod() => string\n```
  }
  
