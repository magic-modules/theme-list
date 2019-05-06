const ThemeList = props =>
  CHECK_PROPS(props, ThemeList.props, 'ThemeList') &&
  GitList({
    org: 'magic-themes',
    header: [Link({ to: 'https://magic-themes.github.io' }, '@magic-themes')],
    desc: ['below is a collection of the available @magic app themes.'],
    items: [
      {
        name: 'docs',
        description: 'the @magic documentation theme. used in all @magic docs.',
      },
    ],
    ...props,
  })

ThemeList.dependencies = {
  GitList: require('@magic-modules/git-list'),
}

ThemeList.props = [
  { key: 'id', type: 'string' },
  { key: 'org', type: 'string' },
  { key: 'header', type: 'string' },
  { key: 'desc', type: ['string', 'array'] },
  { key: 'items', type: 'array' },
]

module.exports = ThemeList
