import enUS from '@locales/en-US.json'
import zhCN from '@locales/zh-CN.json'
import { createI18n } from 'vue-i18n'

// 加载语言包
const messages = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'ch-US', // 默认语言
  fallbackLocale: 'en-US', // 备用语言
  messages,
})

export default i18n
