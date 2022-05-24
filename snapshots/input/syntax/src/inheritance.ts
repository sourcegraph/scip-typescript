export interface Superinterface {
  property: string
  interfaceMethod(): string
}
export abstract class Superclass {
  public abstract overrideMethod(): string
}
export abstract class IntermediateSuperclass extends Superclass {}
export class Subclass extends IntermediateSuperclass implements Superinterface {
  property = 'property'
  public overrideMethod(): string {
    throw new Error('Method not implemented.')
  }
  public interfaceMethod(): string {
    throw new Error('Method not implemented.')
  }
}
export const objectLiteralImplementation: Superinterface = {
  property: 'property',
  interfaceMethod: (): string => {
    throw new Error('Function not implemented.')
  },
}
export function consumesInterface(superInterface: Superinterface): void {}
export function infersInterface(): void {
  consumesInterface({
    interfaceMethod: (): string => 'inferred',
    property: 'inferred',
  })
}
