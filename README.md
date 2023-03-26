### 项目启动

```
pnpm install
pnpm run dev
```

### 创建项目

```
pnpm create hyy-vue3-followWall
```

### 安装路由插件

```
pnpm install router --save
```

### 安装 vuex 插件

```
pnpm install vuex --save
```

### 安装 less 插件

```
pnpm install less less-loader --save
```

### 安装 axios 插件

```
pnpm install axios --save
```

如果在 vue3 中直接使用，安装 vue 扩展 axios 插件

```
pnpm install vue-axios --save
```

### vite 中引入全局 less 变量的方式

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, './src/styles/commons.less')}";`
      }
    }
  }
})
```

可能遇到的问题：在引入 path 时报错。
解决办法，根据提示安装@tyoe/node

```
pnpm install @type/node --save
```

### 引入 iconfont 字体图标

[iconfont](https://www.iconfont.cn/)
