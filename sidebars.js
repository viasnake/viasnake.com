// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  projectSidebar: [
    'projects/index',
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
  tipSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tips'
    }
  ],
  'koriyama-city-open-data-unofficial-webapi': [
    {
      type: 'autogenerated',
      dirName: 'koriyama-city-open-data-unofficial-webapi'
    }
  ],
};

export default sidebars;
