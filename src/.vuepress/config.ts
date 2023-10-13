import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "Sky-Admin-Doc",
    description: "开箱即用的后台模板",

    theme,
    plugins: [
        searchProPlugin({ // https://plugin-search-pro.vuejs.press/zh/
            indexContent: true
        })
    ]

    // Enable it with pwa
    // shouldPrefetch: false,
});
