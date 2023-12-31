// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "蛇による人間のためのブログ",
  tagline:
    "ITに関する知識だったり、ゲームに関する話題だったりを自由気ままに述べている個人ブログです。",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://viasnake.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "viasnake", // Usually your GitHub org/user name.
  projectName: "viasnake.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/viasnake/viasnake.com/edit/master/",
        },
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/viasnake/viasnake.com/edit/master/",
          blogSidebarCount: 15,
          blogSidebarTitle: "最近の投稿",
        },
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
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "viasnake.com",
        logo: {
          alt: "viasnake.com",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
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
        style: "dark",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
