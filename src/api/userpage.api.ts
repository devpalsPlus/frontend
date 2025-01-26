import { UserInfo } from '../models/userInfo';
import { UserJoinedProjectList } from '../models/userProject';
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

export const getUserJoinedProjectList = async (id: number) => {
  try {
    const response = await httpClient.get<UserJoinedProjectList>(
      `/user/${id}/project`
    );
    return response.data;
  } catch (error) {
    console.error('userJoinedProjectList:', error);
    throw error;
  }
};
