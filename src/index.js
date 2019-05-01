const ThemeList = () =>
  ul({ class: 'ThemeList' }, [
    li([
      h3(
        { id: 'themes-docs' },
        Link({ to: 'https://github.com/magic-themes/docs' }, '@magic-themes/docs'),
      ),
      div('the @magic-themes/docs theme is used in all @magic documentation pages.'),
      GitBadges({
        project: 'magic-themes/docs',
        appveyor: 'jaeh/docs',
      }),
      Link({ to: 'https://magic-themes.github.io/docs' }, 'docs / demo'),
    ]),
  ])

ThemeList.style = {
  '.ThemeList': {
    a: {
      display: 'block',
      lineHeight: 1.8,
    },
  },
}

ThemeList.dependencies = {
  GitBadges: require('@magic-modules/gitbadges'),
}

module.exports = ThemeList
