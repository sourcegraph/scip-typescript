import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { escapeLoneSurrogates } from './FileIndexer'

test('documentation preserves valid Unicode and existing escapes', () => {
  const text = 'ASCII café 中文 😀 \\ud800'
  assert.is(escapeLoneSurrogates(text), text)
})

test('documentation escapes unpaired UTF-16 code units', () => {
  assert.is(escapeLoneSurrogates('\ud800'), '\\ud800')
  assert.is(escapeLoneSurrogates('\udfff'), '\\udfff')
  assert.is(escapeLoneSurrogates('a\ud83cx\udfffb'), 'a\\ud83cx\\udfffb')
  assert.is(
    escapeLoneSurrogates('\ud800\ud800\udc00\udc00'),
    '\\ud800\ud800\udc00\\udc00'
  )
})

test.run()
