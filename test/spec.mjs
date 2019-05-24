import { is } from '@magic/test'
import * as ThemeList from '../src/index.mjs'

export default [
  { fn: () => ThemeList.View, expect: is.function, info: 'expect ThemeList to be a function' },
  {
    fn: () => ThemeList.propTypes,
    expect: is.object,
    info: 'expect ThemeList to have propTypes object',
  },
  {
    fn: () => ThemeList.propTypes.ThemeList,
    expect: is.array,
    info: 'expect ThemeList to have propTypes.ThemeList array',
  },
]
