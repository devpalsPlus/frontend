import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { decryptData, encryptData } from '../util/cryptoUtils';

export interface UserData {
  id: number;
  email: string;
  nickname: string;
  hasRequiredTags: boolean;
}

interface AuthState {
  isLoggedIn: boolean;
  userData: UserData | null;
  storeLogin: (
    accessToken: string,
    refreshToken?: string,
    userData?: UserData
  ) => void;
  storeLogout: () => void;
}

const initialUserData: UserData = {
  id: 0,
  email: '',
  nickname: '',
  hasRequiredTags: true,
};

export const getStoredUserData = () => {
  const encryptedData = localStorage.getItem('userData');
  return encryptedData ? decryptData(encryptedData) : null;
};

export const getTokens = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  return { accessToken, refreshToken };
};

const setTokens = (accessToken: string, refreshToken?: string) => {
  localStorage.setItem('accessToken', accessToken);
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
  }
};

const removeTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: getTokens()?.accessToken ? true : false,
      userData: getTokens()?.accessToken ? initialUserData : null,

      storeLogin: (
        accessToken: string,
        refreshToken?: string,
        userData?: UserData
      ) => {
        setTokens(accessToken, refreshToken);
        localStorage.setItem('userData', encryptData(userData));
        set({ isLoggedIn: true, userData });
      },
      storeLogout: () => {
        removeTokens();
        set({ isLoggedIn: false, userData: null });
      },
    }),
    {
      name: 'auth-storage', // 로컬스토리지에 저장될 이름
    }
  )
);

export default useAuthStore;
