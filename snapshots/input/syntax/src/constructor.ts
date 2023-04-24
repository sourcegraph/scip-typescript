export class Constructor {
  constructor(public readonly property: number) {}
}

export function useConstructor(): Constructor {
  return new Constructor(Constructor.name.length)
}
