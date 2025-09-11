import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import i18n from './locales/i18n'
import './assets/css/global.css'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

createApp(App)
  .use(i18n as any)
  .use(router)
  .mount('#app')
