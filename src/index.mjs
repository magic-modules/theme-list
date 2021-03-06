export const View = () =>
  GitList({
    org: 'magic-themes',
    header: [Link({ to: 'https://magic-themes.github.io' }, '@magic-themes')],
    desc: [
      'below is a collection of the available @magic app themes.',
      ' all of the themes below are designed to be usable on their own,',
      ' but they can also be combined if needed.',
    ],
    items: [
      {
        name: 'docs',
        description: 'the @magic documentation theme. used in all @magic docs.',
      },
      {
        name: 'example',
        description: 'a minimal example theme.',
      },
      {
        name: 'project',
        description: 'foundational @magic theme for project presentation.',
      },
      {
        name: 'slides',
        description: 'theme that provides slides for presentations.',
      },
      {
        name: 'reader',
        description: 'a theme designed to provide a reader mode.',
      },
    ],
  })
