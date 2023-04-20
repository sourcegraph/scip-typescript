interface Configuration {
  property: number
}

export function returnStatement(): Configuration {
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
