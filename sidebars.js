// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  projectSidebar: [
    'projects/index',
    {
      type: 'category',
      label: '郡山市オープンデータ非公式 WebAPI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'projects/koriyama-webapi',
        },
      ],
    },
    {
      type: 'category',
      label: 'BetterKeepinventory',
      items: [
        {
          type: 'autogenerated',
          dirName: 'projects/betterkeepinventory',
        },
      ],
    },
    {
      type: 'category',
      label: 'DowntimeProxy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'projects/downtimeproxy',
        },
      ],
    },
  ],
  aipressSidebar: [
    {
      type: 'autogenerated',
      dirName: 'aipress'
    }
  ],
  tipSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tips'
    }
  ],
  gameSidebar: [
    {
      type: 'autogenerated',
      dirName: 'games'
    }
  ],
};

export default sidebars;
