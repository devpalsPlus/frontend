import type { ApiCommonType } from './apiCommon';

export interface MyInquiries {
  title: string;
  content: string;
  category: string;
  state: boolean;
  imageUrls: string[];
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
