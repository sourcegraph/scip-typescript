export function local(): string {
  const a = 'a'
  let b = a
  var c = b,
    c2 = b
  for (let d = 0; d < c.length; d++) {
    c += d
    c2 += c.length
  }
  return [c, c2].reduce((previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue + currentIndex
  })
}
