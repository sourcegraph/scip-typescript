import { Overloader } from './overload'

export interface Superinterface {
  property: string
  interfaceMethod(): string
}
export interface IntermediateSuperinterface extends Superinterface {
  intermediateInterfaceMethod(): string
}
export abstract class Superclass {
  public abstract overrideMethod(): string
}
export abstract class IntermediateSuperclass extends Superclass {
  public override overrideMethod(): string {
    return 'this will get overridden'
  }
  public abstract intermediateOverrideMethod(): string
}
export class Subclass
  extends IntermediateSuperclass
  implements IntermediateSuperinterface, Overloader
{
  public onLiteral(param: any): void {
    throw new Error('Method not implemented.' + param)
  }
  property = 'property'
  public overrideMethod(): string {
    throw new Error('Method not implemented.')
  }
  public intermediateOverrideMethod(): string {
    throw new Error('Method not implemented.')
  }
  public interfaceMethod(): string {
    throw new Error('Method not implemented.')
  }
  public intermediateInterfaceMethod(): string {
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
