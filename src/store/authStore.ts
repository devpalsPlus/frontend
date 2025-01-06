import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  storeLogin: (accessToken: string, refreshToken: string) => void;
  storeLogout: () => void;
}

export const getTokens = () => ({
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken')
});

const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const removeTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => {
      const { accessToken, refreshToken } = getTokens();
      const isLoggedIn = accessToken !== null && refreshToken !== null;

      return {
        accessToken,
        refreshToken,
        isLoggedIn,
        storeLogin: (accessToken: string, refreshToken: string) => {
          set({ accessToken, refreshToken, isLoggedIn: true });
          setTokens(accessToken, refreshToken);
        },
        storeLogout: () => {
          set({ accessToken: null, refreshToken: null, isLoggedIn: false });
          removeTokens();
        },
      };
    },
    {
      name: 'auth-storage', // 로컬스토리지에 저장될 이름
    }
  )
);

export default useAuthStore;