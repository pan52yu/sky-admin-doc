# 目录结构

完整目录结构

```text
├── .vscode  # IDE 工具推荐配置文件
│   │   ├── extensions.json  # 一键安装平台推荐的 vscode 插件
│   │   ├── settings.json  # 设置扩展程序或 vscode 编辑器的一些属性
│   │   ├── vue3.0.code-snippets  # vue3.0 代码片段
│   │   └── vue3.2.code-snippets  # vue3.2 代码片段
├── node_modules  # 模块依赖
├── public  # 静态资源
│   │   ├── bg.png  # 登录页面背景图
│   │   ├── favicon.ico  # favicon
│   │   ├── serverConfig.json  # 全局配置文件（打包后修改也可生效）
├── src
│   ├── api  # 接口请求统一管理
│   ├── assets  # 字体、图片等静态资源
│   ├── components  # 自定义通用组件
│   ├── layout  # 主要页面布局
│   ├── router  # 路由配置
│   ├── store  # pinia 状态管理
│   ├── style  # 全局样式
│   ├── utils  # 全局工具方法
│   ├── views  # 存放编写业务代码页面
│   ├── App.vue  # 入口页面
│   ├── main.ts  # 入口文件
├── types  # 全局 TS 类型配置
│   │   ├── global.d.ts  # 全局类型声明文件
│   │   ├── index.d.ts  # 全局类型声明文件
│   │   ├── index.ts  # 全局类型声明文件
│   │   ├── shims-tsx.d.ts  # 该文件是为了给 .tsx 文件提供类型支持，在编写时能正确识别语法
│   │   └── shims-vue.d.ts  # .vue、.scss 文件不是常规的文件类型，typescript 无法识别，所以我们需要通过下图的代码告诉 typescript 这些文件的类型，防止类型报错
├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/
├── .env  # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）
├── .env.development  # 开发环境变量配置
├── .env.production  # 生产环境变量配置
├── .env.staging  # 预发布环境变量配置
├── .eslintrc.config.js  # eslint 语法检查配置
├── .gitignore  # git 提交忽略文件
├── .npmrc  # npm 配置文件
├── index.html  # html 主入口
├── package.json  # 依赖包管理以及命令配置
├── pnpm-lock.yaml  # 依赖包版本锁定文件
├── README.md  # README
├── uno.config.js  # unocss 配置
├── tsconfig.json  # typescript 配置
└── vite.config.ts  # vite 配置
```