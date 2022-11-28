  export class ClassWithPrivate {
// definition syntax 1.0.0 src/`ClassWithPrivate.ts`/
//documentation ```ts\nmodule "ClassWithPrivate.ts"\n```
//             ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//             documentation ```ts\nclass ClassWithPrivate\n```
    #privateField
//  ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
//  documentation ```ts\n(property) #privateField: any\n```
    #privateFieldWithInitializer = 42
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.
//  documentation ```ts\n(property) #privateFieldWithInitializer: number\n```
  
    #privateMethod() {
//  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
//  documentation ```ts\n(method) #privateMethod(): any\n```
      this.#privateField = 'private field'
//         ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
      return this.#privateField
//                ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
    }
  
    static #privateStaticField
//         ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
//         documentation ```ts\n(property) #privateStaticField: any\n```
    static #privateStaticFieldWithInitializer = 42
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.
//         documentation ```ts\n(property) #privateStaticFieldWithInitializer: number\n```
  
    static #privateStaticMethod() {}
//         ^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
//         documentation ```ts\n(method) #privateStaticMethod(): void\n```
    public publicMethod(): any[] {
//         ^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#publicMethod().
//         documentation ```ts\n(method) publicMethod(): any[]\n```
      return [
        this.#privateField,
//           ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateField`.
        this.#privateFieldWithInitializer,
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateFieldWithInitializer`.
        this.#privateMethod(),
//           ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateMethod`().
        ClassWithPrivate.#privateStaticMethod(),
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                       ^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticMethod`().
        ClassWithPrivate.#privateStaticField,
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                       ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticField`.
        ClassWithPrivate.#privateStaticFieldWithInitializer,
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#`#privateStaticFieldWithInitializer`.
      ]
    }
  }
  
