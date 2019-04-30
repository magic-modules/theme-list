## @magic-modules/theme-list
this is the [@magic-modules](https://github.com/magic-modules/)
ThemeList component.
It provides a list with descriptions and links for all [@magic-themes](https://github.com/magic-themes/).

[html docs](https://magic-modules.github.io/theme-list/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/theme-list.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/theme-list
[travis-image]: https://api.travis-ci.org/magic-modules/theme-list.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/theme-list
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/theme-list/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/core/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/theme-list/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/theme-list
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/theme-list.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/theme-list.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/theme-list/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/theme-list

#### install:
```bash
npm install --save-exact @magic-modules/theme-list
```

#### usage:

##### import:
```javascript
// assets/index.js:


module.exports = {
  //... other entries
  ThemeList = require('@magic-modules/theme-list'),
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => div([ThemeList]),
}
```

thats it.
