import naive from 'naive-ui'
import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/stores'
import App from './App.vue'
import i18n from './locales/i18n'
import './assets/css/global.css'

createApp(App)
  .use(i18n as any)
  .use(router)
  .use(pinia)
  .use(naive)
  .mount('#app')
