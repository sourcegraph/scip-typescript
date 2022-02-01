  import {
    propertyAssignment,
//  ^^^^^^^^^^^^^^^^^^ reference example 1.0.0 src/property-assignment.ts/propertyAssignment().
    shorthandPropertyAssignment,
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference example 1.0.0 src/property-assignment.ts/shorthandPropertyAssignment().
  } from './property-assignment'
  
  export function run(): string {
//                ^^^ definition example 1.0.0 src/property-assignment-reference.ts/run().
    return propertyAssignment().a + shorthandPropertyAssignment().a
//         ^^^^^^^^^^^^^^^^^^ reference example 1.0.0 src/property-assignment.ts/propertyAssignment().
//                              ^ reference example 1.0.0 src/property-assignment.ts/a0:
//                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference example 1.0.0 src/property-assignment.ts/shorthandPropertyAssignment().
//                                                                ^ reference example 1.0.0 src/property-assignment.ts/a1:
  }
  
