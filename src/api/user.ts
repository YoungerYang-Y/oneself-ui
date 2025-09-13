import type { GetUserListParams, LoginRequest, LoginResponse, User } from '@/api/types/user'
import httpClient from '@/utils/http'

// 用户相关 API 封装
export const userApi = {
  /**
   * 用户登录
   */
  login(data: LoginRequest): Promise<LoginResponse> {
    return httpClient.post<LoginResponse>('/auth/login', data)
  },

  /**
   * 获取用户信息
   */
  getUserInfo(): Promise<User> {
    return httpClient.get<User>('/user/info')
  },

  /**
   * 获取用户列表
   */
  getUserList(params: GetUserListParams): Promise<{
    list: User[]
    total: number
  }> {
    return httpClient.get('/user/list', params)
  },

  /**
   * 创建用户
   */
  createUser(data: Partial<User>): Promise<User> {
    return httpClient.post<User>('/user', data)
  },

  /**
   * 更新用户
   */
  updateUser(id: number, data: Partial<User>): Promise<User> {
    return httpClient.put<User>(`/user/${id}`, data)
  },

  /**
   * 删除用户
   */
  deleteUser(id: number): Promise<void> {
    return httpClient.delete(`/user/${id}`)
  },
}
