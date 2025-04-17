import type { ApiCommonType } from './apiCommon';
import type { PositionTag, SkillTag } from './tags';

export interface Career {
  name: string;
  periodStart: string;
  periodEnd: string;
  role: string;
}

export interface UserInfo {
  id: number;
  nickname: string;
  email: string;
  bio?: string;
  profileImg?: string;
  beginner: boolean;
  github?: string;
  career?: Career[];
  positions: Omit<PositionTag, 'createdAt'>[];
  skills: Omit<SkillTag, 'createdAt'>[];
  createdAt?: string;
}

export interface ApiUserInfo extends ApiCommonType {
  data: UserInfo | null;
}

export interface EditMyInfo {
  nickname: string;
  bio?: string;
  github?: string;
  beginner: boolean;
  positionTagIds: number[];
  skillTagIds: number[];
  career?: Career[];
}

export interface ApiUserInfoImg extends ApiCommonType {
  data: string;
}
