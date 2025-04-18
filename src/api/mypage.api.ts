import { ApiUserInfo, ApiUserInfoImg, EditMyInfo } from '../models/userInfo';
import { ApiAppliedProject, ApiJoinedProject } from '../models/userProject';
import { httpClient } from './http.api';

export const getMyInfo = async () => {
  try {
    const response = await httpClient.get<ApiUserInfo>('/user');

    return response.data;
  } catch (error) {
    console.error('내 정보 조회: ', error);
    throw error;
  }
};

export const putMyInfo = async (data: EditMyInfo) => {
  try {
    const response = await httpClient.put<ApiUserInfo>('/user', data);

    return response.data.data;
  } catch (error) {
    console.error('내 정보 수정: ', error);
    throw error;
  }
};

export const patchMyProfileImg = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await httpClient.patch<ApiUserInfoImg>(
      '/user/profile-img',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error('프로필 이미지 업데이트: ', error);
    throw error;
  }
};

export const getMyJoinedProjectList = async () => {
  try {
    const response = await httpClient.get<ApiJoinedProject>('/user/project');

    return response.data;
  } catch (error) {
    console.error('내 프로젝트 리스트: ', error);
    throw error;
  }
};

export const getMyAppliedStatusList = async () => {
  try {
    const response = await httpClient.get<ApiAppliedProject>(
      '/user/applications'
    );

    return response.data;
  } catch (error) {
    console.error('내가 지원한 프로젝트 리스트: ', error);
    throw error;
  }
};
