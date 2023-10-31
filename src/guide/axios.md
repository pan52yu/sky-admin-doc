# axios请求

## Axios

### 中文文档

[点击查看中文文档](https://www.axios-http.cn/)

### 基本请求方式

`Sky-Admin` 封装了 [axios](https://github.com/pan52yu/vue-sky-admin/tree/main/src/utils/http)，支持的请求方式请看具体参考，下面举例常用的四种请求方式



## Mock

平台使用 [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock#mock-file-example)插件集成了 `mockjs`，仅用于本地开发，生产环境请务必删除 `mock`

### 基础用法

① 来到 [mock/modules](https://github.com/pan52yu/vue-sky-admin/tree/main/mock/modules)文件存放目录，比如添加 `login` 接口，采用 `post` 请求，参考下面代码。

::: details 点击展开

```ts
import type { MockMethod } from 'vite-plugin-mock'
const token: Token = {
  admin: 'admin',
  editor: 'editor',
}
export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      if (['admin', 'editor'].includes(body.username || '')) {
        return {
          code: 200,
          data: {
            token: token[body.username],
          },
        }
      }
      else {
        return {
          code: -1,
          data: {
             message: '没有此用户',
          }
        }
      }
    },
  }
] as MockMethod[]

```

:::

② 上面我们添加了 `login` 接口，接着来到 [api](https://github.com/pan52yu/vue-sky-admin/tree/main/src/api)目录，比如添加 `user.ts` 文件，参考下面代码

::: details 点击展开

```ts
// 这里定义返回值类型，使接口拥有良好的类型推导
export type UserResult = {
  /** 是否请求成功 */
  code: number;
  data: {
    token?: string;
    message?: string;
  };
};
export const login = (data?.object) => {
  return request<UserResult>({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
```

:::

③ 上面导出了 `login` 接口，接下来我们来到需要使用这个接口的地方导入，参考下面代码

::: details 点击展开

```ts
<script setup lang="ts">
import { login } from "@/api/user";

async function onLogin() {
  let result = await login({ username: "admin", password: "admin123" });
  if (result.code === 200) {
    console.log(result.data);
  }
}
</script>

<template>
  <el-button @click="login">点击登录</el-button>
</template>
```

:::

### 如何快速删除 `mock`

将 [.env](https://github.com/pan52yu/vue-sky-admin/blob/main/.env#L8)文件中的`VITE_APP_USE_MOCK=true`注释