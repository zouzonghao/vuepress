import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/logs/",
//  "/demo/",
  {
    text: "文章",
    icon: "simple-icons:readdotcv",
    link: "/article/"
//    prefix: "/posts/",
    // children: [
    //   {
    //     text: "Linux相关",
    //     icon: "codicon:terminal-linux",
    //     prefix: "linux/",
    //     link: "linux/",
    //     // children: "structure",
    //     children: [
    //       { 
    //         text: "liunx学习", 
    //         //icon: "pen-to-square", 
    //         link: "linux" 
    //       },
    //       "vps",

    //     ],
    //   },
    //   {
    //     text: "Macx相关",
    //     icon: "iconoir:apple-mac",
    //     prefix: "mac/",
    //     link: "mac/",
    //     children: [
    //       {
    //         text: "mac经验",
    //         //icon: "pen-to-square",
    //         link: "mac",
    //       },
    //     ],
    //   },
    //   {
    //     text: "时间轴",
    //     icon: "simple-line-icons:clock",
    //     link: "/timeline/",
    //     children: [

    //     ],
    //   },
    // ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "时间轴",
    icon: "simple-line-icons:clock",
    link: "/timeline/",
  },
  {
    text: "图标库",
    icon: "material-symbols-light:shop-outline",
    link: "https://icon-sets.iconify.design/",
  },
]);
