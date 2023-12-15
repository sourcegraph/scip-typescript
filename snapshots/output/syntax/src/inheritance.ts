// < definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/

import { Overloader } from './overload'
//       ^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#
//                         ^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/

export interface Superinterface {
//               ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  property: string
//^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
  interfaceMethod(): string
//^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
}
export interface IntermediateSuperinterface extends Superinterface {
//               ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                                  ^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  intermediateInterfaceMethod(): string
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
}
export abstract class Superclass {
//                    ^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
  public abstract overrideMethod(): string
//                ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
}
export abstract class IntermediateSuperclass extends Superclass {
//                    ^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//                    relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
//                                                   ^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
  public override overrideMethod(): string {
//                ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//                relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
    return 'this will get overridden'
  }
  public abstract intermediateOverrideMethod(): string
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
}
export class Subclass
//           ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
//           relationship implementation scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#
  extends IntermediateSuperclass
//        ^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
  implements IntermediateSuperinterface, Overloader
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                       ^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#
{
  public onLiteral(param: any): void {
//       ^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//                 ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
    throw new Error('Method not implemented.' + param)
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
//                                              ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
  }
  property = 'property'
//^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#property.
//relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
  public overrideMethod(): string {
//       ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#overrideMethod().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateOverrideMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateOverrideMethod().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
  }
  public interfaceMethod(): string {
//       ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#interfaceMethod().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateInterfaceMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateInterfaceMethod().
//       relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
  }
}
export const objectLiteralImplementation: Superinterface = {
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/objectLiteralImplementation.
//                                        ^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  property: 'property',
//^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/property0:
//relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
  interfaceMethod: (): string => {
//^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/interfaceMethod0:
//relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    throw new Error('Function not implemented.')
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
  },
}
export function consumesInterface(superInterface: Superinterface): void {}
//              ^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
//                                ^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/consumesInterface().(superInterface)
//                                                ^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
export function infersInterface(): void {
//              ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/infersInterface().
  consumesInterface({
//^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
    interfaceMethod: (): string => 'inferred',
//  ^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/interfaceMethod1:
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    property: 'inferred',
//  ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/property1:
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
  })
}

