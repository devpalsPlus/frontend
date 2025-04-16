import { ApiCommonType } from './apiCommon';
import { SkillTag } from './tags';

export interface ApplicantInfo {
  userId: number;
  message: string;
  phoneNumber: string;
  career: Career[];
  email: string;
  status: string;
  skills: SkillTag[];
  user: {
    id: string;
    nickname: string;
  };
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

export interface ApiApplicants extends ApiCommonType {
  data: ApplicantInfo[];
}

export interface ApiApplicantInfo extends ApiCommonType {
  data: ApplicantInfo;
}
