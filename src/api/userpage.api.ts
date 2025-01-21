import { UserInfo } from '../models/userInfo';
import { httpClient } from './http.api';

export const getUserInfo = async (id: number) => {
  try {
    const response = await httpClient.get<UserInfo>(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('userpage-userinfo:', error);
    throw error;
  }
};
