import type { ApiUserInfo } from '../models/userInfo';
import type { ApiUserProject } from '../models/userProject';
import { httpClient } from './http.api';

export const getUserInfo = async (id: number) => {
  try {
    const response = await httpClient.get<ApiUserInfo>(`/user/${id}`);

    return response.data;
  } catch (error) {
    console.error('다른 유저 정보 조회: ', error);
    throw error;
  }
};

export const getUserJoinedProjectList = async (id: number) => {
  try {
    const response = await httpClient.get<ApiUserProject>(
      `/user/${id}/participated`
    );

    return response.data;
  } catch (error) {
    console.error('다른 유저 참여 프로젝트 조회: ', error);
    throw error;
  }
};

export const getUserManagedProjectList = async (id: number) => {
  try {
    const response = await httpClient.get<ApiUserProject>(
      `/user/${id}/project`
    );

    return response.data;
  } catch (error) {
    console.error('다른 유저 기획 프로젝트 조회: ', error);
    throw error;
  }
};
