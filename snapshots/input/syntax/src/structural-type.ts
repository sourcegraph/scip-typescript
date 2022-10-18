export function foo(): Promise<{ member: number }> {
  return Promise.resolve({ member: 42 })
}
export function bar(): Promise<number> {
  return foo().then(x => x.member)
}
export function bar2(): Promise<number> {
  return foo().then(({ member }) => member)
}
