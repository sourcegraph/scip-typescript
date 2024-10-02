import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { prettyMilliseconds } from './ProjectIndexer'

function minute(x: number): number {
  return x * 60 * 1000
}
function second(x: number): number {
  return x * 1000
}

test('prettyMilliseconds', () => {
  assert.is(prettyMilliseconds(0), '0ms')
  assert.is(prettyMilliseconds(1), '1ms')
  assert.is(prettyMilliseconds(second(1)), '1s 0ms')
  assert.is(prettyMilliseconds(second(1) + 300), '1s 300ms')
  assert.is(prettyMilliseconds(second(2)), '2s 0ms')
  assert.is(prettyMilliseconds(second(5)), '5s 0ms')
  assert.is(prettyMilliseconds(minute(1)), '1m 0s 0ms')
  assert.is(prettyMilliseconds(minute(2)), '2m 0s 0ms')
  assert.is(prettyMilliseconds(minute(5)), '5m 0s 0ms')
  assert.is(prettyMilliseconds(minute(60)), '60m 0s 0ms')
  assert.is(prettyMilliseconds(minute(5) + second(8) + 999), '5m 8s 999ms')
})

test.run()
