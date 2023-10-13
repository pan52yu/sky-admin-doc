import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Sky-Admin-Doc",
  description: "开箱即用的后台模板",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
