interface Configuration {
  property: number
}

function random(): number {
  return Math.random()
}
export function returnStatement(): Configuration {
  if (random() > 0) {
    return {
      property: 41,
    }
  }
  for (let i = 0; i < 9; i++) {
    if (random() > i) {
      return {
        property: 41,
      }
    }
  }
  for (const i of [1, 2, 3]) {
    if (random() > i) {
      return {
        property: 41,
      }
    }
  }
  for (const i in { '1': 2 }) {
    if (random() > Number.parseInt(i)) {
      return {
        property: 41,
      }
    }
  }
  while (random() < 0) {
    return {
      property: 41,
    }
  }
  do {
    if (random() > 0) {
      return {
        property: 41,
      }
    }
  } while (random() < 0)

  return {
    property: 42,
  }
}

export function returnStatementInsideArgumentExpression(): Configuration[] {
  return [1].map<Configuration>(number => {
    const incremented = number + 1
    return {
      property: incremented,
    }
  })
}
