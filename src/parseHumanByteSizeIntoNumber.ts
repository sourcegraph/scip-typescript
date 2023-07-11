export function parseHumanByteSizeIntoNumber(humanByteSize: string): number {
  let value = humanByteSize.toLowerCase()
  let multiplier = 1
  if (value.endsWith('kb')) {
    multiplier = 1000
    value = value.slice(0, -2)
  } else if (value.endsWith('mb')) {
    multiplier = 1000000
    value = value.slice(0, -2)
  } else if (value.endsWith('gb')) {
    multiplier = 1000000000
    value = value.slice(0, -2)
  }
  return Number.parseFloat(value) * multiplier
}
