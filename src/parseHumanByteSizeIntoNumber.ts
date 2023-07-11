const kilo = 1_000
const mega = 1_000_000
const giga = 1_000_000_000

export function parseHumanByteSizeIntoNumber(humanByteSize: string): number {
  let value = humanByteSize.toLowerCase()
  let multiplier = 1
  if (value.endsWith('kb')) {
    multiplier = kilo
    value = value.slice(0, -2)
  } else if (value.endsWith('mb')) {
    multiplier = mega
    value = value.slice(0, -2)
  } else if (value.endsWith('gb')) {
    multiplier = giga
    value = value.slice(0, -2)
  }
  return Number.parseFloat(value) * multiplier
}

export function formatByteSizeAsHumanReadable(byteSize: number): string {
  if (byteSize > giga) {
    return `${byteSize / giga}gb`
  }
  if (byteSize > mega) {
    return `${byteSize / mega}mb`
  }
  if (byteSize > kilo) {
    return `${byteSize / kilo}kb`
  }
  return byteSize.toString()
}
