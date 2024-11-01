import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "三七 's 小站",
  description: "记录生活",

  theme,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
