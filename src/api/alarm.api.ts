import { AlarmList } from '../models/alarm';
import { httpClient } from './http.api';

export const getAlarmList = async () => {
  try {
    const response = await httpClient.get<AlarmList>(`/user/alarm`);
    return response.data.data;
  } catch (error) {
    console.error('getAlarmListError:', error);
    throw error;
  }
};
