  interface Configuration {
// definition syntax 1.0.0 src/`infer-relationship.ts`/
//documentation ```ts\nmodule "infer-relationship.ts"\n```
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//          documentation ```ts\ninterface Configuration\n```
    property: number
//  ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
//  documentation ```ts\n(property) property: number\n```
  }
  
  export function returnStatement(): Configuration {
//                ^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatement().
//                documentation ```ts\nfunction returnStatement(): Configuration\n```
//                                   ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
    return {
      property: 42,
//    ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property0:
//    documentation ```ts\n(property) property: number\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`infer-relationship.ts`/Configuration#property.
    }
  }
  
  export function returnStatementInsideArgumentExpression(): Configuration[] {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/returnStatementInsideArgumentExpression().
//                documentation ```ts\nfunction returnStatementInsideArgumentExpression(): Configuration[]\n```
//                                                           ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
    return [1].map<Configuration>(number => {
//             ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^^^^^^^^ reference syntax 1.0.0 src/`infer-relationship.ts`/Configuration#
//                                ^^^^^^ definition local 3
//                                documentation ```ts\n(parameter) number: number\n```
      const incremented = number + 1
//          ^^^^^^^^^^^ definition local 6
//          documentation ```ts\nvar incremented: number\n```
//                        ^^^^^^ reference local 3
      return {
        property: incremented,
//      ^^^^^^^^ definition syntax 1.0.0 src/`infer-relationship.ts`/property1:
//      documentation ```ts\n(property) property: number\n```
//                ^^^^^^^^^^^ reference local 6
      }
    })
  }
  
