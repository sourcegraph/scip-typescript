// language TypeScript
// < definition syntax 1.0.0 src/`property-assignment-reference.ts`/

import {
  importedShorthand,
//^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/importedShorthand.
  propertyAssignment,
//^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
  shorthandPropertyAssignment,
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
} from './property-assignment'
//     ^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/

interface ContextualProperties {
//        ^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/ContextualProperties#
  importedShorthand: string
//^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/ContextualProperties#importedShorthand.
}

function acceptContext(_value: ContextualProperties): void {}
//       ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/acceptContext().
//                     ^^^^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/acceptContext().(_value)
//                             ^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment-reference.ts`/ContextualProperties#

export function run(): string {
//              ^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/run().
  acceptContext({ importedShorthand })
//^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment-reference.ts`/acceptContext().
//                ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment-reference.ts`/ContextualProperties#importedShorthand.
//                ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/importedShorthand.
  return propertyAssignment().a + shorthandPropertyAssignment().a
//       ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
//                            ^ reference syntax 1.0.0 src/`property-assignment.ts`/a0:
//                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
//                                                              ^ reference syntax 1.0.0 src/`property-assignment.ts`/a1:
}

