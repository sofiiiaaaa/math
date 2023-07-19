// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const path = require('path');

const baseUrl = '/python/math-6vg4dc/v1/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GoIT Python math textbook',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GoIT',
  projectName: 'GoIT Python math textbook',
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'GoIT logo',
        src: 'img/goit-logo.svg',
        href: 'https://goit.global/',
      },
      items: [
        {
          type: 'localeDropdown',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GoIT. Created by Yuriy Kuchma.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-WFX4LQZ',
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity: 'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    {
      src:
      `${baseUrl}/scripts/tracking.js`,
      async: false,
    },
  ],
};

module.exports = config;
