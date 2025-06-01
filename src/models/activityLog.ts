import type { ApiCommonType, User } from './apiCommon';

export interface MyInquiries {
  id: number;
  title: string;
  content: string;
  category: string;
  state: boolean;
  imageUrls: string[];
}

export interface ApiMyInquiries extends ApiCommonType {
  data: MyInquiries[];
}
export interface AllInquiries extends MyInquiries {
  user: User;
  createdAt: string;
}

export interface ApiAllInquiries extends ApiCommonType {
  data: AllInquiries[];
}

export interface MyComments {
  id: number;
  content: string;
  createdAt: string;
  projectId: number;
  projectTitle: string;
}

export interface ApiMyComments extends ApiCommonType {
  data: MyComments[];
}
