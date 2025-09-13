// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: [
    '.github/**',
    '.vscode/**',
  ],
  rules: {
    'no-console': ['warn', {
      allow: ['log', 'warn', 'error'], // 允许常用的 console 方法
    }],
  },
})
