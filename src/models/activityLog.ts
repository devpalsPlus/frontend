import type { ApiCommonType, User } from './apiCommon';

export interface MyInquiries {
  id: number;
  title: string;
  content: string;
  category: string;
  state: boolean;
  answer: string;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface ApiMyInquiries extends ApiCommonType {
  data: MyInquiries[];
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
