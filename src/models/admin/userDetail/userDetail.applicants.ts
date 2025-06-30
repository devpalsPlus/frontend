import type { ApiCommonType, User } from '../../apiCommon';
import type { Career } from '../../applicant';
import type { SkillTag } from '../../tags';

export interface Applicant {
  id: number;
  userId: number;
  projectId: number;
  message: string;
  email: string;
  phoneNumber: string;
  career: Career[];
  status: 'WAITING' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface ApplicantDetail {
  email: string;
  phoneNumber: string;
  message: string;
  skills: SkillTag[];
  career: Career[];
}

export interface ApplicantResult {
  accepted: Applicant[];
  rejected: Applicant[];
}

export interface UserApplicantsData {
  applicants: Applicant[];
  detail: ApplicantDetail;
  results: ApplicantResult[];
}

export interface ApiUserApplicantsData extends ApiCommonType {
  data: UserApplicantsData;
}
