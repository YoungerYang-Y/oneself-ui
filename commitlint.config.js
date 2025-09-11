export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 500], // 改为警告级别 + 120字符
  },
}
