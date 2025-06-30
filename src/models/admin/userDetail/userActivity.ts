import type { MyInquiries } from '../../activityLog';
import type { ApiCommonType } from '../../apiCommon';

export interface UserComment {
  id: number;
  content: string;
  createdAt: string;
  projectId: number;
  projectTitle: string;
}

export interface UserActivityData {
  inquiries: MyInquiries[];
  comments: UserComment[];
}

export interface ApiUserActivityResponse extends ApiCommonType {
  data: UserActivityData;
}
