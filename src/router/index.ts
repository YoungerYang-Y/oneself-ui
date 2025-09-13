import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '@/stores/auth'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取用户认证状态
  const userStore = useUserStore()

  // 从 localStorage 加载认证信息
  userStore.loadFromStorage()

  // 定义不需要认证的白名单路径
  const whiteList = ['/login', '/register'] // 可根据需要添加其他路径

  // 如果访问的是白名单路径，直接放行
  if (whiteList.includes(to.path)) {
    next()
    return
  }

  // 检查用户是否已认证
  if (userStore.isAuthenticated) {
    next() // 已认证，允许访问
  }
  else {
    next('/login') // 未认证，重定向到登录页
  }
})

export default router
