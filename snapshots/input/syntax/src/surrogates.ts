// format-options: showDocs

export const high = '\ud800'
export const low = '\udfff'
export const pair = '\ud83d\ude00'
export const mixed = '\ud800\ud83d\ude00\udfff'

export const adjacent = '\ud800\ud800\udc00\udc00'
export const unicode = 'ASCII café 中文 😀'
export const escaped = '\\ud800'

export function C() {}
const prototype = (C.prototype = {
  '\ud800': 1,
  'low\udfff': 2,
  '\ud83d\ude00': 3,
  '\\ud800': 4,
})
prototype['\ud800']
prototype['low\udfff']
prototype['\ud83d\ude00']
prototype['\\ud800']
