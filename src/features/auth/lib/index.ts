'use client';

export const storage = {
  getToken: () => window.localStorage.getItem('accessToken'),
  setToken: (values: string) =>
    window.localStorage.setItem('accessToken', values),
  clearToken: () => window.localStorage.removeItem('accessToken'),
};

export function getAuthorizationHeader() {
  let config;
  let token = storage.getToken();

  if (token) {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
}
