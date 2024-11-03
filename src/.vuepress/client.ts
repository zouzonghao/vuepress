import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { defineGiscusConfig } from '@vuepress/plugin-comment/client'


export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: "homepage", light: "#35353b" , dark: "#000002"});

  },
});