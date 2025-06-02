//model
import { ApiCommonType, User } from './apiCommon';
import { PositionTag, SkillTag } from './tags';

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

export interface ApiGetAllUsers extends ApiCommonType {
  data: AllUser[];
}

export interface AllUserPreview {
  id: number;
  email: string;
  user: User;
  userState: '접속 중' | '오프라인' | '정지';
  createdAt: string;
}

export interface AllUser extends AllUserPreview {
  skill: SkillTag[];
  position: PositionTag[];
  reportedCount: number;
}
