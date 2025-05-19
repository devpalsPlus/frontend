import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { decryptData, encryptData } from '../util/cryptoUtils';
import type { UserData } from '../models/auth';

interface AuthState {
  isLoggedIn: boolean;
  userData: UserData | null;
  storeLogin: (accessToken: string, userData?: UserData) => void;
  storeLogout: () => void;
}

const initialUserData: UserData = {
  id: 0,
  email: '',
  nickname: '',
  admin: false,
};

export const getStoredUserData = () => {
  const encryptedData = localStorage.getItem('userData');
  return encryptedData ? decryptData(encryptedData) : null;
};

export const getTokens = () => {
  const accessToken = localStorage.getItem('accessToken');

  return { accessToken };
};

const setTokens = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

const removeTokens = () => {
  localStorage.removeItem('accessToken');
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: getTokens()?.accessToken ? true : false,
      userData: getTokens()?.accessToken ? initialUserData : null,

      storeLogin: (accessToken: string, userData?: UserData) => {
        setTokens(accessToken);
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
