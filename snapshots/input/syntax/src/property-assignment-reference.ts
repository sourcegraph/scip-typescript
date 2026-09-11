import {
  importedShorthand,
  propertyAssignment,
  shorthandPropertyAssignment,
} from './property-assignment'

interface ContextualProperties {
  importedShorthand: string
}

function acceptContext(_value: ContextualProperties): void {}

export function run(): string {
  acceptContext({ importedShorthand })
  return propertyAssignment().a + shorthandPropertyAssignment().a
}
