# oneself-ui

> [oneself](https://github.com/crane0927/oneself)的前端工程

## Project Structure

```
vue3-ts-template
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets          # 静态资源
│   ├── components      # 组件
│   ├── layouts         # 布局
│   ├── locales         # i18n
│   ├── pages           # 页面
│   ├── types           # 类型声明
│   ├── App.vue
│   └── main.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Core Dependencies

- [vue](https://cn.vuejs.org/): 渐进式Javascript框架
- [vue-i18n](https://vue-i18n.intlify.dev/): Vue多语言插件
- [vue-router](https://router.vuejs.org/zh/): Vue路由
- [Naive UI](https://www.naiveui.com/zh-CN/os-theme): Vue 3 组件库

## Project Setup

```sh
# install dependencies
pnpm install

# serve with hot reload at localhost:3000
pnpm run dev

# build for production with minification
pnpm run build

# lint
pnpm run lint

# check dependencies
pnpm run dep:check

# dry run release
pnpm run release:dry-run
```
