import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { decryptData, encryptData } from '../util/cryptoUtils';
import type { UserData } from '../models/auth';

interface AuthState {
  isLoggedIn: boolean;
  userData: UserData | null;
  accessToken: string | null;
  login: (accessToken: string, userData: UserData | null) => void;
  logout: () => void;
}

// 암호화 함수
// export const getStoredUserData = () => {
//   const encryptedData = localStorage.getItem('userData');
//   return encryptedData ? decryptData(encryptedData) : null;
// };

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,
      userData: null,

      login: (accessToken: string, userData: UserData | null) => {
        set({
          isLoggedIn: true,
          accessToken,
          userData: userData ? userData : null,
        });
      },
      logout: () => {
        set({ isLoggedIn: false, accessToken: null, userData: null });
      },
    }),
    {
      name: 'auth-storage', // 로컬스토리지에 저장될 이름
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
