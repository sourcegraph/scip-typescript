export class ClassWithPrivate {
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
    return `${this.#privateField}
    ${this.#privateFieldWithInitializer}
    ${this.#privateMethod()}
    ${ClassWithPrivate.#privateStaticMethod()}
    ${ClassWithPrivate.#privateStaticField}
    ${ClassWithPrivate.#privateStaticFieldWithInitializer}`
  }
}
