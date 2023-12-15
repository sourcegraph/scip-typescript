// < definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/

export class ClassWithPrivate {
//           ^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
  #privateField
//^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
  #privateFieldWithInitializer = 42
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.

  #privateMethod() {
//^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
    this.#privateField = 'private field'
//       ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
    return this.#privateField
//              ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
  }

  static #privateStaticField
//       ^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
  static #privateStaticFieldWithInitializer = 42
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.

  static #privateStaticMethod() {}
//       ^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
  public publicMethod(): any[] {
//       ^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#publicMethod().
    return [
      this.#privateField,
//         ^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
      this.#privateFieldWithInitializer,
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.
      this.#privateMethod(),
//         ^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
      ClassWithPrivate.#privateStaticMethod(),
//    ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
      ClassWithPrivate.#privateStaticField,
//    ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
      ClassWithPrivate.#privateStaticFieldWithInitializer,
//    ^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.
    ]
  }
}

