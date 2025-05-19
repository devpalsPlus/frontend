//model
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
  userData: UserData;
}

export interface UserData {
  id: number;
  email: string;
  nickname: string;
  admin: boolean;
}
