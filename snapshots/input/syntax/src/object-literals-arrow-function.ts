import { Option } from './reusable-types'

interface Foobar {
  foobar: number
}

export function hasArrowFunctionParameter(
  something: number,
  fn: (foobar: Foobar) => Foobar
): Foobar {
  return fn({ foobar: 42 + something })
}

export function consumesArrowFunction(): number {
  return (
    hasArrowFunctionParameter(1, ({ foobar }) => ({ foobar: foobar + 1 }))
      .foobar +
    hasArrowFunctionParameter(2, foobar => ({ foobar: foobar.foobar + 2 }))
      .foobar
  )
}

export function genericArrow(): Foobar[] {
  return [1].map<Foobar>(n => ({ foobar: n + 1 }))
}

export function genericArrowOption(): Option<Foobar>[] {
  return [1].map<Option<Foobar>>(n => ({ value: { foobar: n + 1 } }))
}

export function genericArrow2(): Foobar[] {
  // navigation to `foobar` below does not work with tsserver or scip-java
  // because `map`  is missing an explicit `map<Foobar>` annotation.
  return [1].map(n => ({ foobar: n + 1 }))
}
