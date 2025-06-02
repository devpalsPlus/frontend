import type { MyInquiries } from '../activityLog';
import type { ApiCommonType, User } from '../apiCommon';

export interface AllInquiries extends MyInquiries {
  user: User;
  createdAt: string;
}

export interface ApiAllInquiries extends ApiCommonType {
  data: AllInquiries[];
}
