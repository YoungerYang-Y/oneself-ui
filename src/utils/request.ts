import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/auth'

// 扩展 AxiosRequestConfig 类型
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  retry?: number
  retryDelay?: number
  lastRequestTime?: number
}

// 创建 axios 实例
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    // 添加认证 token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }

    // 添加时间戳防止缓存
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      }
    }

    // 添加请求开始时间用于计算请求耗时
    config.lastRequestTime = Date.now()

    // 设置默认重试次数
    if (config.retry === undefined) {
      config.retry = 3
    }

    // 设置默认重试延迟
    if (config.retryDelay === undefined) {
      config.retryDelay = 1000
    }

    console.log('🚀 发送请求:', config.method?.toUpperCase(), config.url, config)
    return config
  },
  (error) => {
    console.error('❌ 请求错误:', error)
    // 使用 naive-ui 的消息组件
    const message = useMessage()
    message.error('请求发送失败')
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as CustomAxiosRequestConfig
    const currentTime = Date.now()
    const requestTime = config.lastRequestTime || currentTime
    const duration = currentTime - requestTime

    console.log('✅ 响应成功:', response.status, response.config.url, `(${duration}ms)`)

    // 根据后端约定判断响应是否成功
    const { code, data, message } = response.data

    // 假设 code === 200 表示请求成功
    if (code === 200) {
      return data
    }

    // 其他业务错误处理
    const msg = useMessage()
    msg.error(message || '请求失败')
    return Promise.reject(new Error(message || '请求失败'))
  },
  async (error) => {
    const originalRequest = error.config as CustomAxiosRequestConfig
    console.error('❌ 响应错误:', error.response?.status, error.message)

    // 使用 naive-ui 的消息组件
    const message = useMessage()

    // 处理网络超时重试
    if ((error.code === 'ECONNABORTED' || error.message.includes('timeout')) && originalRequest.retry! > 0) {
      originalRequest.retry!--
      console.log(`🔄 请求超时，剩余重试次数: ${originalRequest.retry}`)
      await new Promise(resolve => setTimeout(resolve, originalRequest.retryDelay))
      return request(originalRequest)
    }

    // 处理 HTTP 状态码错误
    if (error.response) {
      const { status, data } = error.response
      switch (status) {
        case 400:
          message.error(data.message || '请求参数错误')
          break
        case 401:{
          message.error('登录已过期，请重新登录')
          const userStore = useUserStore()
          const router = useRouter()
          userStore.logout()
          await router.push('/login')
        }
          break
        case 403:
          message.error('没有权限访问')
          break
        case 404:
          message.error('请求资源不存在')
          break
        case 500:
          message.error('服务器内部错误')
          break
        default:
          message.error(data.message || `请求失败 (${status})`)
      }
    }
    else if (error.request) {
      // 网络错误
      message.error('网络连接异常，请检查网络')
    }
    else {
      // 其他错误
      message.error('请求失败')
    }

    return Promise.reject(error)
  },
)

export default request
