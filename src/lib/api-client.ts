import { getAuthorizationHeader } from '@/features/auth';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:3001',
  validateStatus: (status) => status >= 200 && status <= 299,
});

axios.interceptors.request.use((config) => {
  const authorizationHeaders = getAuthorizationHeader() as any;
  if (authorizationHeaders) {
    config.headers = {
      ...config.headers,
      ...authorizationHeaders.headers,
    };
  }
  return config;
});

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});
