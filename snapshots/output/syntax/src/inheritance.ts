// < definition syntax 1.0.0 src/`inheritance.ts`/

import { Superinterface } from './reusable-types'
//       ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
//                             ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/
import { Overloader } from './overload'
//       ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
//                         ^^^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/

export interface IntermediateSuperinterface extends Superinterface {
//               ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                                  ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
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
//           relationship implementation syntax 1.0.0 src/`overload.d.ts`/Overloader#
//           relationship implementation syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
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
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
//                                              ^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
  }
  property = 'property'
//^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#property.
//relationship implementation reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
  public overrideMethod(): string {
//       ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#overrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateOverrideMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateOverrideMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
  }
  public interfaceMethod(): string {
//       ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#interfaceMethod().
//       relationship implementation reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
  }
  public intermediateInterfaceMethod(): string {
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateInterfaceMethod().
//       relationship implementation reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
    throw new Error('Method not implemented.')
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
  }
}
export const objectLiteralImplementation: Superinterface = {
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/objectLiteralImplementation.
//                                        ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#
  property: 'property',
//^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#property.
  interfaceMethod: (): string => {
//^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Superinterface#interfaceMethod().
    throw new Error('Function not implemented.')
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error#
//            ^^^^^ reference typescript 5.6.2 lib/`lib.es5.d.ts`/Error.
  },
}

