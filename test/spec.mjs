import { is } from '@magic/test'
import * as ThemeList from '../src/index.mjs'

export default [
  { fn: () => ThemeList.View, expect: is.function, info: 'expect ThemeList to be a function' },
]
