interface Props {
  a: number
}
const props: Props = { a: 42 }

export function objectDestructuring(): number[] {
  const { a: b } = props
  return [props].map(({ a }) => a + b)
}

export function arrayDestructuring(): number[] {
  const [b] = [props]
  return [[b]].map(([a]) => a.a)
}

export function nestedDestructuring(): number[] {
  const [[b]] = [[props]]
  return [[props]].map(([{ a }]) => a + b.a)
}

export function forLoopObjectDestructuring(): number {
  for (const { a } of [props]) {
    return a
  }
  return 1
}

export function forLoopArrayDestructuring(): number {
  for (const [{ a }] of [[props]]) {
    return a
  }
  return 1
}
