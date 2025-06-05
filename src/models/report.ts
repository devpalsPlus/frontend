import { type ApiCommonType, type User } from './apiCommon';

export interface ApiPostContent {
  reportTargetId: number;
  reportFilter: number;
  reason: string[];
  detail: string;
}

export interface ApiAllReports extends ApiCommonType {
  data: AllReports[];
}

export interface AllReports {
  id: number;
  reportedCount: number;
  category: string;
  user: User;
  isDone: boolean;
  createdAt: string;
}
