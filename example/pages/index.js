module.exports = () => [
  h1('@magic-modules/theme-list'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' ThemeList component. It shows a list of all @magic-themes.',
  ]),

  GitBadges({
    project: 'magic-modules/theme-list',
    appveyor: 'jaeh/theme-list',
  }),

  h2({ id: 'installation' }, 'installation'),
  Pre(`
npm install magic-modules/theme-list
`),

  h2({ id: 'require' }, 'require'),
  p('first add the component to the assets'),
  Pre(`
// assets/index.js
module.exports = {
  //...other exports
  ThemeList: require('@magic-modules/theme-list'),
}`),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or component'),
  Pre('module.exports = {\n  View: () => ThemeList,\n}'),

  h2({ id: 'demo' }, 'demo'),
  p('this is what it looks like'),
  ThemeList,

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/theme-list/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
