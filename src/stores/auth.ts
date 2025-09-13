import { defineStore } from 'pinia'

// 存储认证信息
export const useUserStore = defineStore('auth', {
  state: () => ({
    token: '' as string,
    refreshToken: '' as string,
  }),
  getters: {
    isAuthenticated: (state) => {
      return !!state.token
    },
  },
  actions: {
    setToken(token: string, refreshToken: string) {
      this.token = token
      this.refreshToken = refreshToken
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
    },
    clear() {
      this.token = ''
      this.refreshToken = ''
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
    },
    loadFromStorage() {
      this.token = localStorage.getItem('token') || ''
      this.refreshToken = localStorage.getItem('refreshToken') || ''
    },
    logout() {
      // 清除认证信息
      this.clear()

      // 如果在浏览器环境中，重定向到登录页
      if (typeof window !== 'undefined') {
        // 如果需要在action中使用router，可以通过以下方式：
        // 1. 在调用logout的地方传入router实例
        // 2. 或者使用window.location进行跳转

        // 清除其他可能的用户相关数据
        // 例如：用户信息、权限等

        // 跳转到登录页面
        window.location.href = '/login'
      }
    },
  },
})
