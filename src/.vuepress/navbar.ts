import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/demo/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/guide/",
        children: [
            {
                text: "快速上手",
                link: "start"
            }
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
