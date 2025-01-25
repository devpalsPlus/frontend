//model

import { UserData } from '../store/authStore';

export interface VerifyEmail {
  email: string;
  code: string;
}

export interface VerifyNickname {
  nickname: string;
  message: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userData: UserData;
}
