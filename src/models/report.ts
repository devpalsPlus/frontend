import type { ApiCommonType } from './apiCommon';

export interface ApiPostContent {
  reportTargetId: number;
  reportFilter: number;
  reason: string[];
  detail: string;
}

export interface ApiAllReports extends ApiCommonType {
  data: AllReports[];
  totalPage: number;
}

export interface AllReports {
  reportId: number;
  userId: number;
  nickname: string;
  profileImg: string;
  warning: number;
  category: number[];
  reportedAt: string;
  imposed: boolean;
}
