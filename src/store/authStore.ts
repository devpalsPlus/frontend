import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  storeLogin: (accessToken: string, refreshToken: string) => void;
  storeLogout: () => void;
}

export const getTokens = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  return { accessToken, refreshToken };
};

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const removeTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: getTokens()?.accessToken ? true : false,

      storeLogin: (accessToken: string, refreshToken: string) => {
        setTokens(accessToken, refreshToken);
        set({ isLoggedIn: true });
      },
      storeLogout: () => {
        removeTokens();
        set({ isLoggedIn: false });
      },
    }),
    {
      name: 'auth-storage', // 로컬스토리지에 저장될 이름
    }
  )
);

export default useAuthStore;
