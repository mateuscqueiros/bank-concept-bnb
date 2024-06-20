import { getAuthorizationHeader } from '@/features/auth';
import Axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { toast } from 'sonner';

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

export type CatchErrorsType = {
  err: any;
  fallbackMessage: string;
  router?: AppRouterInstance;
};

export function catchErrors({ err, fallbackMessage, router }: CatchErrorsType) {
  console.log(err);

  if (err.response.status === 401) {
    toast.error('Você não está logado', {
      action: router
        ? {
            label: 'Ir para login',
            onClick: () => router.push('/login'),
          }
        : undefined,
    });
    return;
  }

  toast.error(fallbackMessage, {
    description: err.message,
  });
}
