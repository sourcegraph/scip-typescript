import { Configuration } from './reusable-types'

function random(): number {
  return Math.random()
}

export function handleArrayLiteral(): Configuration[] {
  return [
    {
      property: 41,
      property2: '41',
    },
  ]
}

export function returnStatement(): Configuration {
  if (random() > 0) {
    return {
      property: 41,
      property2: '41',
    }
  }
  for (let i = 0; i < 9; i++) {
    if (random() > i) {
      return {
        property: 41,
        property2: '41',
      }
    }
  }
  for (const i of [1, 2, 3]) {
    if (random() > i) {
      return {
        property: 41,
        property2: '41',
      }
    }
  }
  for (const i in { '1': 2 }) {
    if (random() > Number.parseInt(i)) {
      return {
        property: 41,
        property2: '41',
      }
    }
  }
  while (random() < 0) {
    return {
      property: 41,
      property2: '41',
    }
  }
  do {
    if (random() > 0) {
      return {
        property: 41,
        property2: '41',
      }
    }
  } while (random() < 0)

  return {
    property: 42,
    property2: '41',
  }
}

export function constDeclaration(): number[] {
  var configuration1: Configuration = {
    property: 1,
    property2: '1',
  }
  configuration1 = {
    property: 2,
    property2: '2',
  }
  let configuration2: Configuration = {
    property: 3,
    property2: '3',
  }
  configuration2.property = configuration1.property
  const configuration3: Configuration = {
    property: 4,
    property2: '4',
  }
  return [
    configuration1.property,
    configuration2.property,
    configuration3.property,
  ]
}
