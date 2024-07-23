import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/logs/2024/": "structure",
  "/posts/": "structure",
  // "/posts/mac/": "structure",
  "/": [
    "",
    // {
    //   text: "归档",
    //   icon: "book",
    //   prefix: "diary/",
    //   //可点击
    //   link: "diary/",
    //   children: "structure",
    //   expanded: true,
    //   collapsible: false
    // },
    {
      text: "归档",
      icon: "/svg/book.svg",
      prefix: "diary/",
      //可点击
      link: "diary/",
      children: [
        {
          text: "2023年",
          icon: "/svg/double-arrow-down.svg",
          prefix: "2023/",
          //可点击
          link: "2023/",
          children: "structure",
        },
        {
          text: "2024年",
          icon: "/svg/double-arrow-down.svg",
          prefix: "2024/",
          //可点击
          link: "2024/",
          children: "structure",
        },
      ],
      expanded: true,
      collapsible: false
    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   link: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
