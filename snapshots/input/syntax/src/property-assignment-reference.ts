import {
  propertyAssignment,
  shorthandPropertyAssignment,
} from './property-assignment'

export function run(): string {
  return propertyAssignment().a + shorthandPropertyAssignment().a
}
