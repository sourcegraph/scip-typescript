export class Class {
  public classProperty: string
  constructor(constructorParam: string) {
    this.classProperty = constructorParam
  }
  public method(methodParam: string): string {
    return this.privateMethod(methodParam)
  }
  public static staticMethod(methodParam: string): string {
    return methodParam
  }
  private privateMethod(methodParam: string): string {
    return methodParam
  }
}

export function newClass(param: string): string {
  const instance = new Class(param).classProperty
  const instance2 = Class.staticMethod(param)
  return instance + instance2
}
