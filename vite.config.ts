import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Inspector from 'unplugin-vue-inspector/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import Layouts from 'vite-plugin-vue-layouts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/types/typed-router.d.ts',
    }),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
      ],
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true, // 允许在 <template> 直接使用自动导入的 API
    }),

    Layouts(),

    checker({
      typescript: true, // 启用 TS 检查
      vueTsc: true, // 启用 Vue 单文件组件检查
      overlay: { // 错误显示配置
        position: 'tr', // 位置：top-right
        initialIsOpen: false, // 初始不自动打开
      },
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspector(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@locales': path.resolve(__dirname, './src/locales'),
    },
  },
})
