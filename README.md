# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

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

## Development Dependencies

### Code Specification & Formatting

> Wiki:[ESLint Rules](https://github.com/YoungerYang-Y/vue3-ts-template/wiki/ESLint-Rules)

- [@antfu/eslint-config](https://github.com/antfu/eslint-config): eslint配置集
- [eslint](https://eslint.org/): 静态代码检查工具
- [eslint-plugin-format](https://github.com/antfu/eslint-plugin-format): 代码格式化插件
- [@microsoft/eslint-formatter-sarif](https://github.com/Microsoft/sarif-js-sdk): 格式报告生成器

### Git commit specs

> Wiki: [Best Practices](https://github.com/YoungerYang-Y/vue3-ts-template/wiki/Best-Practices)

- [@commitlint/cli](https://commitlint.js.org/): 提交消息校验工具
- [@commitlint/config-conventional](https://commitlint.js.org/): 提交消息常规配置
- [husky](https://github.com/typicode/husky): Git 钩子管理工具
- [lint-staged](https://github.com/okonet/lint-staged): 对暂存区文件执行 Lint

### Automate publishing

- [semantic-release](https://semantic-release.gitbook.io/semantic-release): 全自动版本管理和包发布
- [@semantic-release/changelog](https://semantic-release.gitbook.io/semantic-release): 自动生成变更日志
- [@semantic-release/git](https://semantic-release.gitbook.io/semantic-release): 自动提交发布文件（如 CHANGELOG）

### Vue development support

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue): 官方插件，提供 Vue 3 单文件组件支持。
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import): 按需自动导入 API，减少重复代码
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components): 按需自动导入 Vue 组件
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router): 基于文件的自动路由，Vue Router 的增强工具
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts): Vue 布局系统支持
- [vue-tsc](https://github.com/johnsoncodehk/vue-tsc): Vue 单文件的 TypeScript 类型检查

### Debugging and development experience

- [unplugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector)：Vue 组件调试工具
- [vite-plugin-vue-inspector](https://github.com/webfansplz/vite-plugin-vue-inspector)：Vite 集成 Vue 调试插件
- [vite-plugin-checker](): 开发时实时类型/语法检查（Vite）

### Build the core of the tool

- [vite](https://vitejs.dev/): 前端构建工具，快速搭建Vue项目
- [@vue/tsconfig](): Vue 项目的 TypeScript 配置
- [typescript](https://www.typescriptlang.org/): 强类型Javascript

### CSS Preprocessor

- [Less](https://lesscss.org/): CSS 预处理器
- [modern-normalize](https://github.com/csstools/normalize.css): CSS 样式重置

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
