import { SkillTag } from './tags';

export interface ApplicantInfo {
  userId: number;
  message: string;
  phoneNumber: string;
  status: string;
  User: UserInfo;
}

export interface UserInfo {
  nickname: string;
  UserSkillTag: UserSkillTag[];
}

export interface UserSkillTag {
  SkillTag: SkillTag;
}
