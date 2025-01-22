import { SkillTag } from './tags';

export interface ApplicantInfo {
  userId: number;
  message: string;
  phoneNumber: string;
  career: Career[];
  email: string;
  status: string;
  User: UserInfo;
}

export interface UserInfo {
  nickname: string;
  bio: string;
  UserSkillTag: UserSkillTag[];
}

export interface UserSkillTag {
  userId: number;
  skillTagId: number;
  SkillTag: SkillTag;
}

export interface Career {
  name: string;
  role: string;
  periodEnd: string;
  periodStart: string;
}
