// < definition scip-typescript npm syntax 1.0.0 src/`property-assignment-reference.ts`/

import {
  propertyAssignment,
//^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
  shorthandPropertyAssignment,
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
} from './property-assignment'
//     ^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/

export function run(): string {
//              ^^^ definition scip-typescript npm syntax 1.0.0 src/`property-assignment-reference.ts`/run().
  return propertyAssignment().a + shorthandPropertyAssignment().a
//       ^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
//                            ^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/a0:
//                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
//                                                              ^ reference scip-typescript npm syntax 1.0.0 src/`property-assignment.ts`/a1:
}

