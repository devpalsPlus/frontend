import { ApiCommonType } from './apiCommon';

export interface AlarmList extends ApiCommonType {
  data: Alarm[];
}

export interface AlarmAll {
  id: number;
  project_id: number;
  user_id: number;
  content: string;
  enabled: boolean;
  alarmFilter: string;
  createdAt: number;
}

export interface Alarm {
  routingId: number;
  content: string;
  AlarmFilterId: number;
  createdAt: string;
}
