  export class ClassWithPrivate {
// definition syntax 1.0.0 src/`ClassWithPrivate.ts`/
//documentation ```ts\nmodule "ClassWithPrivate.ts"\n```
//             ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
//             documentation ```ts\nclass ClassWithPrivate\n```
    #privateField
    #privateFieldWithInitializer = 42
  
    #privateMethod() {
      this.#privateField = 'private field'
      return this.#privateField
    }
  
    static #privateStaticField
    static #privateStaticFieldWithInitializer = 42
  
    static #privateStaticMethod() {}
    public publicMethod(): string {
//         ^^^^^^^^^^^^ definition syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#publicMethod().
//         documentation ```ts\n(method) publicMethod(): string\n```
      return `${this.#privateField}
      ${this.#privateFieldWithInitializer}
      ${this.#privateMethod()}
      ${ClassWithPrivate.#privateStaticMethod()}
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
      ${ClassWithPrivate.#privateStaticField}
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
      ${ClassWithPrivate.#privateStaticFieldWithInitializer}`
//      ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`ClassWithPrivate.ts`/ClassWithPrivate#
    }
  }
  
