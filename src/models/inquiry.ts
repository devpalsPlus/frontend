import type { MyInquiries } from './activityLog';
import type { ApiCommonType, User } from './apiCommon';

export interface InquiryFormData {
  category: string;
  title: string;
  content: string;
}

export interface AdminInquiry {
  id: number;
  title: string;
  user: User;
  state: boolean;
  createdAt: string;
}

export interface ApiAdminInquiry extends ApiCommonType {
  data: AdminInquiry[];
}

export interface ApiAdminInquiryDetail extends ApiCommonType {
  data: MyInquiries;
}

export interface InquiryAnswerBody {
  id: string;
  answer: string;
}
