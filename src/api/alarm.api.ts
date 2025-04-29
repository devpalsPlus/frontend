import type { ApiAlarmList } from '../models/alarm';
import { httpClient } from './http.api';

export const getAlarmList = async () => {
  try {
    const response = await httpClient.get<ApiAlarmList>(`/user/alarm`);

    return response.data.data;
  } catch (error) {
    console.error('getAlarmListError:', error);
    throw error;
  }
};

export const deleteAlarm = async (id: number) => {
  try {
    await httpClient.delete<ApiAlarmList>(`/user/alarm/${id}`);
  } catch (e) {
    console.log('알림 삭제 에러 ', e);
  }
};

export const patchAlarm = async (id: number) => {
  try {
    const response = await httpClient.patch<ApiAlarmList>(`/user/alarm`, {
      id,
      enabled: true,
    });

    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const testLiveAlarm = async () => {
  try {
    const response = await httpClient.get<ApiAlarmList>(
      `/user/send-alarm?alarmFilter=0`
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
