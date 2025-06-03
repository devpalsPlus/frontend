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
  imposedCount: number;
  category: string;
  user: User;
  isImposed: boolean;
  createdAt: string;
}
