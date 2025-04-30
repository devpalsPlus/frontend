import { ApiCommonType } from './apiCommon';

export interface ApiAlarmList extends ApiCommonType {
  data: Alarm[] | null;
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
  id: number;
  routingId: number;
  content: string;
  alarmFilterId: number;
  createdAt: string;
  enabled: boolean;
}

export interface AlarmLive {
  alarmFilterId: number;
  createAt: string;
  message: string;
  routingId: number;
}
