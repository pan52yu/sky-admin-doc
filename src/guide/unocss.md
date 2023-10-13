# unocss

::: tip
平台内置了[unocss](https://unocss.dev/), 通过`原子化css` 的方法快速构建页面
:::



## `UnoCss`文档

[官方文档](https://unocss.dev/)

[中文文档点我](https://alfred-skyblue.github.io/unocss-docs-cn/)

## `UnoCss` 的 `vscode` 插件

在 `vscode` 插件商店搜  `antfu.unocss` 安装后

+ 鼠标移动到到对应的类名，即可带来智能提示，如下图

![antfu.unocss](https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20231013152233340.png)

+ 提供智能提示

![antfu.unocss2](https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20231013152353100.png)

## `UnoCss`使用技巧

### 1、自定义属性值

UnoCss 提供 `[]`让用户自定义属性值，只需要在 `[]`中输入你想要的属性即可

```vue
<div class="w-[666px] bg-[#763272]" />
```



### 2、权重

#### 单个实用程序类加 `!important`

- 比如给 `h4` 标签 一个 `text-2xl !important` 的高权重字体大小，你需要加权重，那么就在其前面加上 `!` 这个感叹号即可。

```html
<h4 class="!text-2xl">
 Hello word
</h4>
```

#### `!` 总是在实用程序名称的开头，在任何变体之后，但在任何前缀之前

- 比如下面的 `有效代码` ，解释一下代码的意思，就是当鼠标覆盖上去，字体变成白色。 `hover:` 代表 `变体` ，`text-white` 代表程序名称（任何前缀）。

  - 有效代码

  ```html
  <div class="hover:!text-white"></div>
  ```

  - 无效代码

  ```html
  <div class="!hover:text-white"></div>
  ```

###  3、响应式设计

### 4、暗黑模式

### 5、`hover`、焦点和其他状态

### 6、复用样式

`--at-apply` 或者 `Shortcuts(快捷方式)`

## `UnoCss` 进阶使用

### Presets 预设

[UnoCss Preset](https://unocss.dev/presets/#presets)

::: tip
`UnoCss` 的 `Presets` 很强大
:::

#### Attributify

[attributify-preset](https://unocss.dev/presets/attributify)

```shell
pnpm add -D @unocss/preset-attributify
```

```ts
// uno.config.ts
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    // ...
  ],
})
```

可以在标签上直接写 CSS 样式
```vue
<div bg-green-50 un-hover="bg-green-200" un-text-xl text-center />
```


#### Icon（图标）

[Icons preset](https://unocss.dev/presets/icons)

**安装：**

```shell
pnpm add -D  @iconify-json/[你想要的收藏]
```

```ts
// uno.config.ts
import { defineConfig,presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({ 
	    /* options */ 
	}),
    // ...other presets
  ],
})
```

安装 `@unocss` 时会自带 `preset-icons`，所以安装 `@iconify-json` 图标就可以了

[所有可用图标 -> Icônes](https://icones.js.org/)

**使用：**

```vue
<span class="i-logos-vue text-3xl" />
<button class="i-carbon-sun dark:i-carbon-moon" />
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
```

> 还可以自定义图标
> [自定义图标](https://article.juejin.cn/post/7244818201976078394#heading-14)

::: tip
更多可以查看 `UnoCss` 的官网提供的所有 [Presets](https://unocss.dev/presets/#presets)
:::

### Rulers （规则）

[Rules](https://unocss.dev/config/rules)

```ts
export default defineConfig({  
   // ...UnoCSS options
  rules: [
      [
        // 多行文本超出部分省略号 line-n
        /^line-(\d+)$/,
        ([, l]) => {
          if (~~l === 1) {
            return {
              overflow: "hidden",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
              width: "100%",
            }
          }
          return {
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": l,
          }
        },
      ],
    ],
})
```


### Shortcuts（快捷方式）

[Shortcuts](https://unocss.dev/config/shortcuts)

```ts
// 自定义快捷方式
shortcuts: {
	"bg-main": "bg-green-50",
	// ...
},
```

```html
<div class="bg-main" />
```

### transformer

#### Directives（指令）

[Directives transformer](https://unocss.dev/transformers/directives)

**安装：**

```shell
pnpm add -D @unocss/transformer-directives
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
})
```

**使用：**

> 可以使用 `@apply` 、 `@screen` 和 `theme()` 指令

```css
.btn {
	@apply rounded px-2 border-none bg-blue-5 text-white;
}
```

> 注意：在 `scss` 文件中使用 `@apply` 写法，会出现 vscode 无法识别的问题

```css
.btn {
	--at-apply: rounded px-2 border-none bg-blue-5 text-white;
}
```

> 可以使用 `--at-apply`

#### Variant Group ( 前缀组)

[Variant group transformer](https://unocss.dev/transformers/variant-group)

> 解决繁琐的多次写前缀的情况

**安装：**

```shell
pnpm add -D @unocss/transformer-variant-group
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...
  transformers: [
    transformerVariantGroup(),
  ],
})
```

**使用：**

```html
<div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/> <!-- 简化之后： --> 
<div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
```

#### Compile Class（构建合并多个原子类到一个类）

[Compile class transformer](https://unocss.dev/transformers/compile-class)

```ts
// install
pnpm add -D @unocss/transformer-compile-class

// uno.config.ts
import { defineConfig } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass(),
  ],
})
```

**使用：**

```html
<div class=":uno: text-center sm:text-left">   
	<div class=":uno: text-sm font-bold hover:text-red"/> 
</div>
```

最终编译的结果：

```html
<div class="uno-qlmcrp">   
	<div class="uno-0qw2gr"/> 
</div>
```



## 注意事项：

+ 使用 `Ant Design Vue` 时， unocss 的重置样式让，`a-button` 的默认按钮变透明
	+ 在 `main.ts` 中引入 `import '@unocss/reset/tailwind-compat.css'`
	+ 而不是 `import '@unocss/reset/tailwind.css'`
	+ 即可解决