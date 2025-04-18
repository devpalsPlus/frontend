//model

import { UserData } from '../store/authStore';
import { ApiCommonType } from './apiCommon';

export interface VerifyEmail {
  email: string;
  code: string;
}

export interface ApiVerifyNickname extends ApiCommonType {
  data: null;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userData: UserData;
}
