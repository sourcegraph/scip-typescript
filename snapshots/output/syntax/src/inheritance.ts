// < definition syntax 1.0.0 src/`inheritance.ts`/

import { Overloader } from './overload'
//       ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
//                         ^^^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/

export interface Superinterface {
//               ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  property: string
//^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property0:
  interfaceMethod(): string
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
}
export interface IntermediateSuperinterface extends Superinterface {
//               ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                                  ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  intermediateInterfaceMethod(): string
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
}
export abstract class Superclass {
//                    ^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superclass#
  public abstract overrideMethod(): string
//                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
}
export abstract class IntermediateSuperclass extends Superclass {
//                    ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//                    relationship implementation syntax 1.0.0 src/`inheritance.ts`/Superclass#
//                                                   ^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superclass#
  public override overrideMethod(): string {
//                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//                relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
    return 'this will get overridden'
  }
  public abstract intermediateOverrideMethod(): string
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
}
export class Subclass
//           ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#
//           relationship implementation syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//           relationship implementation syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//           relationship implementation syntax 1.0.0 src/`inheritance.ts`/Superclass#
//           relationship implementation syntax 1.0.0 src/`inheritance.ts`/Superinterface#
//           relationship implementation syntax 1.0.0 src/`overload.d.ts`/Overloader#
  extends IntermediateSuperclass
//        ^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
  implements IntermediateSuperinterface, Overloader
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                       ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
{
  public onLiteral(param: any): void {
//       ^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().
//       relationship implementation reference syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//                 ^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
    throw new Error('Method not implemented.' + param)
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
//                                              ^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
  }
  property = 'property'
//^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#property.
//relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/property0:
  public overrideMethod(): string {
//       ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#overrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateOverrideMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateOverrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
  }
  public interfaceMethod(): string {
//       ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#interfaceMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateInterfaceMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateInterfaceMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
  }
}
export const objectLiteralImplementation: Superinterface = {
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/objectLiteralImplementation.
//                                        ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  property: 'property',
//^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property1:
//relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/property0:
  interfaceMethod: (): string => {
//^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/interfaceMethod0:
//relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    throw new Error('Function not implemented.')
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Error.
  },
}
export function consumesInterface(superInterface: Superinterface): void {}
//              ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
//                                ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/consumesInterface().(superInterface)
//                                                ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
export function infersInterface(): void {
//              ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/infersInterface().
  consumesInterface({
//^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
    interfaceMethod: (): string => 'inferred',
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/interfaceMethod1:
//  relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
    property: 'inferred',
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property2:
//  relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/property0:
  })
}

