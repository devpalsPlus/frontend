import { EditMyInfo, MyInfo } from '../models/myInfo';
import { httpClient } from './http.api';

export const getMyInfo = async () => {
  try {
    const response = await httpClient.get<MyInfo>('/user/me');
    return response.data;
  } catch (error) {
    console.error('mypage-myinfo:', error);
    throw error;
  }
};

export const putMyInfo = async (data: EditMyInfo) => {
  try {
    const response = await httpClient.put('/user/me', data);
    return response;
  } catch (error) {
    console.error('mypage-myinfoedit:', error);
    throw error;
  }
};
