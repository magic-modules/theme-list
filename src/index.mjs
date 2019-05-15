export const View = props =>
  CHECK_PROPS(props, propTypes, 'ThemeList') &&
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

export const propTypes = [
  { key: 'id', type: 'string' },
  { key: 'org', type: 'string' },
  { key: 'header', type: 'string' },
  { key: 'desc', type: ['string', 'array'] },
  { key: 'items', type: 'array' },
]
