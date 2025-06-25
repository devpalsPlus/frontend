import { ApiCommonType, User } from '../../apiCommon';

export interface UserInquiry {
  id: number;
  title: string;
  content: string;
  category: string;
  state: boolean;
  answer?: string;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface UserComment {
  id: number;
  content: string;
  createdAt: string;
  projectId: number;
  projectTitle: string;
}

export interface UserActivityData {
  inquiries: UserInquiry[];
  comments: UserComment[];
}

export interface ApiUserActivityResponse extends ApiCommonType {
  data: UserActivityData;
}
