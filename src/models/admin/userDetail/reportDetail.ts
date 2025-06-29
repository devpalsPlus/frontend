import { ApiCommonType } from '../../apiCommon';

export interface UserData {
  userId: number;
  nickname: string;
  img: string;
}

export interface ReportDetail {
  reportId: number;
  reporter: UserData;
  reportedUser: UserData;
  reportedAt: string;
  reason: string;
  category: 'ALL' | 'ABUSE' | 'SEXUAL' | 'AD' | 'COPYRIGHT' | 'ETC';
  location: 'USER' | 'PROJECT' | 'COMMENT' | 'RECOMMENT';
  locationId: number;
}

export interface ApiReportDetail extends ApiCommonType {
  data: ReportDetail;
}
