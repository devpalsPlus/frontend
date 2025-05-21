import axios, { AxiosRequestConfig } from 'axios';
import useAuthStore, { getTokens } from '../store/authStore';

export const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}`;
const DEFAULT_TIMEOUT = 15000;

export const createClient = (config?: AxiosRequestConfig) => {
  const { storeLogin, storeLogout } = useAuthStore.getState();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
      authorization: getTokens().accessToken
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

        /**
         *  http 로컬 환경이라 httpOnly인 refresh 토큰 전송 불가
         *  배포 후 사용 (주석처리)
         */
        // try {
        //   console.log('트라이문 안', useAuthStore.getState());

        //   const refreshResponse = await axiosInstance.post(
        //     `${BASE_URL}/auth/refresh`
        //   );

        //   const { accessToken: newAccessToken } = refreshResponse.data;

        //   storeLogin(newAccessToken);
        //   originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        //   return await axiosInstance(originalRequest);
        // } catch (refreshError) {
        //   storeLogout();
        //   return Promise.reject(refreshError);
        // }

        storeLogout();
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
