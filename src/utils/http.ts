import type { AxiosRequestConfig } from 'axios'
import request from './request'

/**
 * HTTP客户端对象，包含常用的HTTP方法
 */
const httpClient = {
  /**
   * GET 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param config 其他配置
   */
  get<T = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return request({
      method: 'get',
      url,
      params,
      ...config,
    })
  },

  /**
   * POST 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 其他配置
   */
  post<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return request({
      method: 'post',
      url,
      data,
      ...config,
    })
  },

  /**
   * PUT 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 其他配置
   */
  put<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return request({
      method: 'put',
      url,
      data,
      ...config,
    })
  },

  /**
   * DELETE 请求
   * @param url 请求地址
   * @param config 其他配置
   */
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return request({
      method: 'delete',
      url,
      ...config,
    })
  },

  /**
   * PATCH 请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 其他配置
   */
  patch<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return request({
      method: 'patch',
      url,
      data,
      ...config,
    })
  },
}

export default httpClient
