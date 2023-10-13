import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    // "/": [
    //     "",
    //     {
    //         text: "案例",
    //         icon: "laptop-code",
    //         prefix: "demo/",
    //         link: "demo/",
    //         children: "structure",
    //     },
    //     {
    //         text: "文档",
    //         icon: "book",
    //         prefix: "guide/",
    //         children: "structure",
    //     },
    //     "slides",
    // ],
    "/guide/": [
        {
            text: "指南",
            children: [
                {
                    text: "快速开始",
                    link: "/guide/start"
                },
                {
                    text: "目录结构",
                    link: "/guide/directory"
                },
                {
                    text: ".vscode文件夹详解",
                    link: "/guide/vscode"
                },
                {
                    text: "插件",
                    link: "/guide/plugins"
                }
            ],
        },
        {
            text: "进阶",
            children: [
                {
                    text: "UnoCss",
                    link: "/guide/unocss"
                }
            ]
        }
    ],
    "/demo/": "structure"
});
