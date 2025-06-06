import { PositionTag, SkillTag } from './tags';
import { type ApiCommonType, type User } from './apiCommon';

export enum UserState {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  SUSPENDED = 'SUSPENDED',
}

export const USER_STATE_LABELS = {
  [UserState.ONLINE]: '접속 중',
  [UserState.OFFLINE]: '오프라인',
  [UserState.SUSPENDED]: '정지',
} as const;

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

export interface ApiGetAllUsersPreview extends ApiCommonType {
  data: AllUserPreview[];
}
export interface AllUserPreview {
  id: number;
  email: string;
  user: User;
  userState: UserState;
  createdAt: string;
}

export interface ApiGetAllUsers extends ApiCommonType {
  data: AllUserList;
}

export interface AllUser extends AllUserPreview {
  skill: SkillTag[];
  position: PositionTag[];
  reportedCount: number;
}

export interface AllUserList {
  allUsers: AllUser[];
  totalPages: number;
}
