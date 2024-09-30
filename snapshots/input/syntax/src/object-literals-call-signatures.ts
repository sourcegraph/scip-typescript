import {
  Configuration,
  GenericClass,
  GenericInterface,
  Option,
  Superinterface,
} from './reusable-types'

export function consumesInterface(superInterface: Superinterface): void {}
export function consumesArray(superInterface: Superinterface[]): void {}
export function consumesGenericInterface<T>(
  genercInterface: GenericInterface<T>
): void {}

export function infersInterface(): void {
  consumesInterface({
    interfaceMethod: (): string => 'inferred',
    property: 'inferred',
  })
  consumesArray([
    {
      interfaceMethod: (): string => 'inferred',
      property: 'inferred',
    },
  ])
  consumesGenericInterface<number>({
    interfaceMethod: (): string => 'inferred',
    property: 123,
  })
  consumesGenericInterface<Option<Configuration>[]>({
    interfaceMethod: (): string => 'inferred',
    property: [{ value: { property: 42, property2: '42' } }],
  })
}
export function returnStatementInsideArgumentExpression(): Configuration[] {
  if (1 == 1) {
    return [1].map<Configuration>((number: number): Configuration => {
      const incremented = number + 1
      return {
        property: incremented,
        property2: incremented.toString(),
      }
    })
  } else {
    return [1].map<Configuration>(number => {
      const incremented = number + 1
      return {
        property: incremented,
        property2: incremented.toString(),
      }
    })
  }
}

export function createGenericClass(): GenericClass<Configuration> {
  return new GenericClass<Configuration>([{ property: 1, property2: '2' }])
}

export function handleGenericClass() {
  return createGenericClass().map(({ property, property2 }) => ({
    property: property + 1,
    property2: property2 + '1',
  }))
}

export function handleShorthand() {
  const property = '42'
  const interfaceMethod = (): string => 'inferred'
  consumesInterface({
    interfaceMethod,
    property,
  })
}
