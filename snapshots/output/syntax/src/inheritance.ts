  import { Overloader } from './overload'
//         ^^^^^^^^^^ reference syntax 1.0.0 src/`overload.d.ts`/Overloader#
  
  export interface Superinterface {
//                 ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superinterface#
//                 documentation ```ts\ninterface Superinterface\n```
    property: string
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
//  documentation ```ts\n(property) property: string\n```
    interfaceMethod(): string
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
//  documentation ```ts\n(method) interfaceMethod() => string\n```
  }
  export interface IntermediateSuperinterface extends Superinterface {
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#
//                 documentation ```ts\ninterface IntermediateSuperinterface\n```
//                                                    ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
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
//             relationship implementation scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#
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
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
//                                                ^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Subclass#onLiteral().(param)
    }
    property = 'property'
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#property.
//  documentation ```ts\n(property) property: string\n```
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
    public overrideMethod(): string {
//         ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#overrideMethod().
//         documentation ```ts\n(method) overrideMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#overrideMethod().
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superclass#overrideMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
    }
    public intermediateOverrideMethod(): string {
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateOverrideMethod().
//         documentation ```ts\n(method) intermediateOverrideMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperclass#intermediateOverrideMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
    }
    public interfaceMethod(): string {
//         ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#interfaceMethod().
//         documentation ```ts\n(method) interfaceMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
    }
    public intermediateInterfaceMethod(): string {
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/Subclass#intermediateInterfaceMethod().
//         documentation ```ts\n(method) intermediateInterfaceMethod(): string\n```
//         relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/IntermediateSuperinterface#intermediateInterfaceMethod().
      throw new Error('Method not implemented.')
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
    }
  }
  export const objectLiteralImplementation: Superinterface = {
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/objectLiteralImplementation.
//             documentation ```ts\nvar objectLiteralImplementation: Superinterface\n```
//                                          ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
    property: 'property',
//  ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property0:
//  documentation ```ts\n(property) property: string\n```
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
    interfaceMethod: (): string => {
//  ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/interfaceMethod0:
//  documentation ```ts\n(property) interfaceMethod: () => string\n```
//  relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
      throw new Error('Function not implemented.')
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error#
//              ^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Error.
    },
  }
  export function consumesInterface(superInterface: Superinterface): void {}
//                ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
//                documentation ```ts\nfunction consumesInterface(superInterface: Superinterface): void\n```
//                                  ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/consumesInterface().(superInterface)
//                                  documentation ```ts\n(parameter) superInterface: Superinterface\n```
//                                                  ^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/Superinterface#
  export function infersInterface(): void {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/infersInterface().
//                documentation ```ts\nfunction infersInterface(): void\n```
    consumesInterface({
//  ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`inheritance.ts`/consumesInterface().
      interfaceMethod: (): string => 'inferred',
//    ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/interfaceMethod1:
//    documentation ```ts\n(property) interfaceMethod: () => string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#interfaceMethod().
      property: 'inferred',
//    ^^^^^^^^ definition syntax 1.0.0 src/`inheritance.ts`/property1:
//    documentation ```ts\n(property) property: string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`inheritance.ts`/Superinterface#property.
    })
  }
  
