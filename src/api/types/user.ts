export interface User {
  id: number
  username: string
  email?: string
  nickname?: string
  avatar?: string
  role?: string
  createdAt?: string
  updatedAt?: string
}

// 定义接口相关类型
export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface GetUserListParams {
  page: number
  pageSize: number
  keyword?: string
}
