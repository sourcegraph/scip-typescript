import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { parseHumanByteSizeIntoNumber } from './parseHumanByteSizeIntoNumber'

function checkHumanByteSize(
  humanInput: string,
  expectedByteNumber: number
): void {
  test(humanInput, () => {
    const obtained = parseHumanByteSizeIntoNumber(humanInput)
    assert.equal(obtained, expectedByteNumber)
  })
}

// Invalid formats
checkHumanByteSize('invalid', NaN)
checkHumanByteSize('15tb', NaN)
checkHumanByteSize('15b', NaN)

// All numeral
checkHumanByteSize('1001', 1001)

// All lowercase
checkHumanByteSize('1.2kb', 1_200)
checkHumanByteSize('1.2mb', 1_200_000)
checkHumanByteSize('1.2gb', 1_200_000_000)

// All uppercase
checkHumanByteSize('1.2KB', 1_200)
checkHumanByteSize('1.2MB', 1_200_000)
checkHumanByteSize('1.2GB', 1_200_000_000)

// Mixed case
checkHumanByteSize('1.2Kb', 1_200)
checkHumanByteSize('1.2Mb', 1_200_000)
checkHumanByteSize('1.2Gb', 1_200_000_000)
