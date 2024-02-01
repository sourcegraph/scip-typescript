import { descriptorString, typeDescriptor } from './Descriptor'
import * as scip from './scip'

export class ScipSymbol {
  private constructor(
    public readonly value: string,
    private readonly descriptor?: scip.scip.Descriptor
  ) {}

  public get display_name(): string | undefined {
    return this.descriptor?.name
  }

  public isEmpty(): boolean {
    return this.value === ''
  }

  public isLocal(): boolean {
    return this.value.startsWith('local ')
  }

  public static local(counter: number): ScipSymbol {
    return new ScipSymbol(`local ${counter}`)
  }

  public static empty(): ScipSymbol {
    return new ScipSymbol('')
  }

  public static package(name: string, version: string): ScipSymbol {
    return new ScipSymbol(`scip-typescript npm ${name} ${version} `)
  }

  public static anonymousPackage(): ScipSymbol {
    return ScipSymbol.package('.', '.')
  }

  public static builtinType(value: string): ScipSymbol {
    return ScipSymbol.global(
      ScipSymbol.package('typescript', '.'),
      typeDescriptor(value)
    )
  }

  public static global(
    owner: ScipSymbol,
    descriptor: scip.scip.Descriptor
  ): ScipSymbol {
    return new ScipSymbol(owner.value + descriptorString(descriptor))
  }
}
