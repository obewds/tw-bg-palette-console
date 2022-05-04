// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-bg-palette-console/',
    title: '@obewds/tw-bg-palette-console',
    description: 'A documentation site for the TwBgPaletteConsole component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-bg-palette-console" },
            { text: "GitHub", link: "https://github.com/obewds/tw-bg-palette-console" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
