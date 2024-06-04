import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/logs/2024/": "structure",
  "/posts/": "structure",
  // "/posts/mac/": "structure",
  "/": [
    "",
    {
      text: "归档",
      icon: "book",
      prefix: "logs/",
      //可点击
      link: "logs/",
      children: "structure",
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
