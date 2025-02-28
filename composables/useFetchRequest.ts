import { useFetch } from '#app';
import type { UseFetchOptions } from 'nuxt/app';
 
interface RequestOptions extends UseFetchOptions<any> {
  customBaseURL?: string;
}
 
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type HandleRequestOptions = { request: Request; options: RequestOptions };
type HandleResponseOptions = { response: any };
 
// 請求攔截器
function handleRequest({ options }: HandleRequestOptions) {
  options.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 767|OAp1M52Akq7os139Brs8KPR4m5K9El3J57sGCQSta3aed4bb',
    ...options.headers,
  };
}
 
// 響應攔截器
function handleResponse({ response }: HandleResponseOptions) {
  const { code, message } = response._data
  
  // 接口成功
  if (code === 200) {
    return response._data
  }
  

  if (code === 401) {
    // 此處做【登錄失效】處理
  }

  return Promise.reject(new Error(message))
}
 
/**
 * 創建請求方法
 * @param method
 */
function createUseFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = {}
  ) {
    const baseURL = import.meta.env.VITE_APP_BASE_API
    const requestUrl = baseURL + url
    return await useFetch(requestUrl, {
      ...options,
      method,
      body: data,
      onRequest: handleRequest,
      onResponse: handleResponse
    });
  };
}

export const useFetchGet = createUseFetchRequest('GET');
export const useFetchPost = createUseFetchRequest('POST');
export const useFetchPut = createUseFetchRequest('PUT');
export const useFetchDelete = createUseFetchRequest('DELETE');