// < definition syntax 1.0.0 file://src/ClassWithPrivate.ts

export class ClassWithPrivate {
//           ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
  #privateField
//^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
  #privateFieldWithInitializer = 42
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.

  #privateMethod() {
//^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
    this.#privateField = 'private field'
//       ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
    return this.#privateField
//              ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
  }

  static #privateStaticField
//       ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
  static #privateStaticFieldWithInitializer = 42
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.

  static #privateStaticMethod() {}
//       ^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
  public publicMethod(): any[] {
//       ^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#publicMethod().
    return [
      this.#privateField,
//         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
      this.#privateFieldWithInitializer,
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.
      this.#privateMethod(),
//         ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
      ClassWithPrivate.#privateStaticMethod(),
//    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
      ClassWithPrivate.#privateStaticField,
//    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
      ClassWithPrivate.#privateStaticFieldWithInitializer,
//    ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.
    ]
  }
}

