import axios, { AxiosRequestConfig } from 'axios';
import useAuthStore from '../store/authStore';
import { postRefresh } from './auth.api';

export const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}`;
const DEFAULT_TIMEOUT = 15000;

export const createClient = (config?: AxiosRequestConfig) => {
  const { login, logout } = useAuthStore.getState();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = useAuthStore.getState().accessToken;
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.error('interceptors request error:', error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (!originalRequest.retryCount) {
        originalRequest.retryCount = 0;
      }

      if (
        error.response &&
        error.response.status === 401 &&
        originalRequest.retryCount < 5
      ) {
        originalRequest.retryCount += 1;

        /**
         *  http 로컬 환경이라 httpOnly인 refresh 토큰 전송 불가
         *  배포 후 사용 (주석처리)
         *  5회 시도후 안되면 로그아웃 처리하기
         */
        // try {
        //   const refreshResponse = await postRefresh()

        //   const { accessToken: newAccessToken } = refreshResponse.data;

        //   login(newAccessToken,null);
        //   originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        //   return await axiosInstance(originalRequest);
        // } catch (refreshError) {
        //   logout();
        //   return Promise.reject(refreshError);
        // }

        logout();
        useAuthStore.persist.clearStorage();
        window.location.href = '/login';
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
