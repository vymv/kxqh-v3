import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  // 当发生跨域请求时携带cookie
  withCredentials: true,
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    config.headers['X-Token'] = 'my token';
    return config;
  },
  (error) => {
    console.log(errir);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      ElMessage.error({
        message: res.message || '未知的错误发生了...',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log(error);
    ElMessage.error({
      message: error.message || '未知的错误发生了...',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
