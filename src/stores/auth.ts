import { defineStore } from 'pinia'

// 存储认证信息
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string,
    refreshToken: '' as string,
  }),
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
  },
})
