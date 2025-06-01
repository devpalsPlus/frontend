//model
import { ApiCommonType, User } from './apiCommon';

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
  hasRequiredTags: boolean;
}

export interface ApiOauth extends ApiCommonType {
  data: Pick<LoginResponse, 'accessToken'>;
  user: UserData;
}

export interface ApiGetAllUsers extends ApiCommonType {
  data: AllUser[];
}

export interface AllUser {
  id: number;
  email: string;
  name: string;
  user: User;
  createdAt: string;
}
