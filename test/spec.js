const { is } = require('@magic/test')
const ThemeList = require('../src')

module.exports = [
  { fn: () => ThemeList, expect: is.function, info: 'expect ThemeList to be a function' },
  { fn: () => ThemeList.style, expect: is.object, info: 'expect ThemeList to have styles' },
]
