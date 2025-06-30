import { ApiCommonType } from '../../apiCommon';

export interface UserData {
  userId: number;
  nickname: string;
  profileImg: string;
}

export interface ReportDetail {
  reportId: number;
  reporter: UserData;
  reportedUser: UserData;
  reportedAt: string;
  reason: string;
  category: number[];
  location: 'USER' | 'PROJECT' | 'COMMENT' | 'RECOMMENT';
  locationId: number;
}

export interface ApiReportDetail extends ApiCommonType {
  data: ReportDetail;
}
