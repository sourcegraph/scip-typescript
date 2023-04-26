namespace Yay {
  export class SuperConstructor {
    constructor(public readonly property: number) {}
  }

  export namespace Woo {
    export class MyClass {
      constructor() {}
    }
  }
}

export class SuperConstructor2 {
  constructor(public readonly property: number) {}
}

export function useConstructor(): Yay.SuperConstructor {
  return new Yay.SuperConstructor(10)
}

export function useConstructor2(): SuperConstructor2 {
  return new SuperConstructor2(10)
}

export function useConstructor3(): Yay.Woo.MyClass {
  return new Yay.Woo.MyClass()
}

export class NoConstructor {
  property: number
}

export function useNoConstructor() {
  return new NoConstructor()
}
