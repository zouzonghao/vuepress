import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/logs/": "structure",
  "/": [
    "",
    {
      text: "日志",
      icon: "book",
      prefix: "logs/",
      //可点击
      link: "logs/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
