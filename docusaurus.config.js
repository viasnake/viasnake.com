// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '蛇による人間のためのブログ',
  tagline: 'ITに関する知識だったり、ゲームに関する話題だったりを自由気ままに述べている個人ブログです。',
  favicon: 'img/favicon.ico',

  url: 'https://viasnake.com/',
  baseUrl: '/',

  organizationName: 'viasnake',
  projectName: 'viasnake.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/viasnake/viasnake.com/edit/master/',
        },
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          editUrl:
            'https://github.com/viasnake/viasnake.com/edit/master/',
          blogSidebarCount: 15,
          blogSidebarTitle: "最近の投稿",
        },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      }),
    ],
  ],

  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8017032553209403",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'viasnake.com',
        logo: {
          alt: 'viasnake.com',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: "/",
            position: "left",
            label: "ブログ",
          },
          {
            type: "docSidebar",
            sidebarId: "programSidebar",
            position: "left",
            label: "プログラム置き場",
          },
          {
            href: "https://github.com/viasnake/viasnake.com",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://viasnake.com/viasnake",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Social",
            items: [
              {
                label: "X (Twitter)",
                href: "https://twitter.com/viasnake",
              },
              {
                label: "GitHub",
                href: "https://github.com/viasnake",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/viasnake",
              },
            ],
          },
          {
            title: "Ads",
            items: [
              {
                html: `
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8017032553209403"
                     crossorigin="anonymous"></script>
                <!-- viasnake.com-footer -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-8017032553209403"
                     data-ad-slot="4731444434"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                `,
              },
            ],
          },
          // {
          //   title: 'Blog',
          //   items: [
          //     {
          //       label: 'blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'docs',
          //       to: '/docs',
          //     },
          //   ],
          // },
        ],
        copyright: `© ${new Date().getFullYear()} viasnake. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
