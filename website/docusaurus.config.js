/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Build UI',
  tagline: 'Create your own page editors with React',
  url: 'https://luismps.github.io.', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LuisMPS', // Usually your GitHub org/user name.
  projectName: 'build-ui', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'Build UI',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'tutorials/how-to-read',
          position: 'right',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'api/how-to-read',
          position: 'right',
          label: 'API',
        },
        {
          href: 'https://github.com/LuisMPS/build-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Tutorial',
              to: '/docs/tutorials/how-to-read',
            },
            {
              label: 'API',
              to: '/docs/api/how-to-read',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/LuisMPS/build-ui/issues',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/LuisMPS/build-ui/pulls',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/build-ui',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LuisMPS/build-ui',
            },
            {
              label: 'Got any Questions?',
              href: 'https://github.com/LuisMPS/build-ui/issues',
            },
          ],
        },
      ],
      copyright: `MIT Licensed ${new Date().getFullYear()} - Build UI.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/LuisMPS/build-ui/tree/main/website/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
