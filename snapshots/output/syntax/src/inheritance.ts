  import { Superinterface } from './reusable-types'
// definition syntax 1.0.0 src/`inheritance.ts`/
//documentation ```ts\nmodule "inheritance.ts"\n```
//         ^^^^^^^^^^^^^^ reference local 0
  import { Overloader } from './overload'
//         ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
//                           ^^^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/
  
  export interface IntermediateSuperinterface extends Superinterface {
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                 documentation ```ts\ninterface IntermediateSuperinterface\n```
//                                                    ^^^^^^^^^^^^^^ reference local 0
    intermediateInterfaceMethod(): string
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
//  documentation ```ts\n(method) intermediateInterfaceMethod() => string\n```
  }
  export abstract class Superclass {
//                      ^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superclass#
//                      documentation ```ts\nclass Superclass\n```
    public abstract overrideMethod(): string
//                  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
//                  documentation ```ts\n(method) overrideMethod(): string\n```
  }
  export abstract class IntermediateSuperclass extends Superclass {
//                      ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//                      documentation ```ts\nclass IntermediateSuperclass\n```
//                      relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
//                                                     ^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superclass#
    public override overrideMethod(): string {
//                  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//                  documentation ```ts\n(method) overrideMethod(): string\n```
//                  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
      return 'this will get overridden'
    }
    public abstract intermediateOverrideMethod(): string
//                  ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
//                  documentation ```ts\n(method) intermediateOverrideMethod(): string\n```
  }
  export class Subclass
//             ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#
//             documentation ```ts\nclass Subclass\n```
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#
    extends IntermediateSuperclass
//          ^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#
    implements IntermediateSuperinterface, Overloader
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                                         ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
  {
    public onLiteral(param: any): void {
//         ^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().
//         documentation ```ts\n(method) onLiteral(param: any): void\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//                   ^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
//                   documentation ```ts\n(parameter) param: any\n```
      throw new Error('Method not implemented.' + param)
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
//                                                ^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
    }
    property = 'property'
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#property.
//  documentation ```ts\n(property) property: string\n```
    public overrideMethod(): string {
//         ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#overrideMethod().
//         documentation ```ts\n(method) overrideMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
    }
    public intermediateOverrideMethod(): string {
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateOverrideMethod().
//         documentation ```ts\n(method) intermediateOverrideMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
    }
    public interfaceMethod(): string {
//         ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#interfaceMethod().
//         documentation ```ts\n(method) interfaceMethod(): string\n```
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
    }
    public intermediateInterfaceMethod(): string {
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateInterfaceMethod().
//         documentation ```ts\n(method) intermediateInterfaceMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
    }
  }
  export const objectLiteralImplementation: Superinterface = {
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/objectLiteralImplementation.
//             documentation ```ts\nvar objectLiteralImplementation: Superinterface\n```
//                                          ^^^^^^^^^^^^^^ reference local 0
    property: 'property',
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property0:
//  documentation ```ts\n(property) property: string\n```
    interfaceMethod: (): string => {
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/interfaceMethod0:
//  documentation ```ts\n(property) interfaceMethod: () => string\n```
      throw new Error('Function not implemented.')
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Error.
    },
  }
  
