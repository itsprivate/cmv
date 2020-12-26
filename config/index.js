const siteMetadata = {
  siteUrl: "https://changemyview.buzzing.cc",
  author: `Reddit`,
  locale: "zh",
  title: "你可以改变我的想法吗？",
  shortTitle: "改变我的想法",
  description: "用中文浏览Reddit-Change My View的热帖",
  keywords: ["buzzing", "改变我的想法", "reddit"],
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Change My View`,
      url: `https://www.reddit.com/r/changemyview/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Change My View`,
      shortTitle: "BuzzCMV",
      description: `See what's buzzing on Reddit Change My View Subreddit in your native language`,
      keywords: ["buzzing", "Change My View", "Change My Mind"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
      social: [
        {
          name: `Change My View`,
          url: `https://www.reddit.com/r/changemyview/`,
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/en/`,
          external: true,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "你可以改變我的想法嗎？",
      shortTitle: "改變我的想法",
      description: "用中文瀏覽Reddit-Change My View的熱帖",
      keywords: ["buzzing", "改變我的想法", "reddit"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
      social: [
        {
          name: `Change My View`,
          url: `https://www.reddit.com/r/changemyview/`,
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/zh-Hant/`,
          external: true,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
