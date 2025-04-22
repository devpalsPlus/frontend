import { ApiCommonType } from './apiCommon';

export interface AlarmList extends ApiCommonType {
  data: AlarmAll[];
}

export interface AlarmAll {
  id: number;
  project_id: number;
  user_id: number;
  content: string;
  enabled: boolean;
  alramFilter: string;
  createdAt: number;
}
