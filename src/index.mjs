export const View = () =>
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
  })
