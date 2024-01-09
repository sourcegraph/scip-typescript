// format-options: showRanges

const test = () => {
  const a = 'a'
  const b = 'b'

  return a + b
}

function test2() {
  const a = 'a'
  const b = 'b'

  return a + b
}

class Test {
  constructor() {
    const a = 'a'
    const b = 'b'

    return a + b
  }

  test() {
    const a = 'a'
    const b = 'b'

    return a + b
  }

  static test() {
    const a = 'a'
    const b = 'b'

    return a + b
  }
}
