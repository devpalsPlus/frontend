import axios, { AxiosRequestConfig } from 'axios';
import useAuthStore from '../store/authStore';

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}`;
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const { accessToken, refreshToken, storeLogin, storeLogout } =
    useAuthStore.getState();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsImVtYWlsIjoiZGV2cGFsc0BtYWlsLmNvbSIsImlhdCI6MTczNjQzNDEzMiwiZXhwIjoxNzM2NDM3NzMyfQ.Wpx7zqPjnkgtMh5cd0rzqm_NdprHOyTyDeGw_6hiZ9I`,
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.log(error);
      Promise.reject(error);
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
        originalRequest._retry
      ) {
        originalRequest._retry = true;
        try {
          const refreshResponse = await axios.post(`${BASE_URL}/auth/refresh`, {
            refreshToken,
          });
          const newAccessToken = refreshResponse.data.accessToken;
          storeLogin(newAccessToken, refreshToken as string);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return axios(originalRequest);
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
