import { AlarmList } from '../models/alarm';
import { httpClient } from './http.api';

export const getAlarmList = async () => {
  try {
    const response = await httpClient.get<AlarmList>(`/user/alram`);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error('getAlarmListError:', error);
    throw error;
  }
};

export const getSendAlarm = async () => {
  try {
    const response = await httpClient.get('/user/send-alarm');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
