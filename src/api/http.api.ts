import axios, { AxiosRequestConfig } from 'axios';
import useAuthStore, { getTokens } from '../store/authStore';

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}`;
const DEFAULT_TIMEOUT = 15000;

export const createClient = (config?: AxiosRequestConfig) => {
  const { storeLogin, storeLogout } = useAuthStore.getState();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
      authorization:
        getTokens().accessToken || getTokens().refreshToken
          ? `Bearer ${getTokens().accessToken}`
          : '',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const { accessToken } = getTokens();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.log('interceptors request error:', error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        try {
          const refreshToken = getTokens().refreshToken;

          const refreshResponse = await axios.post(`${BASE_URL}auth/refresh`, {
            refreshToken,
          });

          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            refreshResponse.data;

          storeLogin(newAccessToken, newRefreshToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return await axios(originalRequest);
        } catch (refreshError) {
          storeLogout();
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
