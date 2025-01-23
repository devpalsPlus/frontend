import { EditMyInfo, UserInfo } from '../models/userInfo';
import {
  MyAppliedProjectStatusList,
  UserJoinedProjectList,
} from '../models/userProject';
import { httpClient } from './http.api';

export const getMyInfo = async () => {
  try {
    const response = await httpClient.get<UserInfo>('/user/me');
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

export const patchMyProfileImg = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await httpClient.patch('/user/me/profile-img', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('myprofile upload:', error);
    throw error;
  }
};

export const getMyJoinedProjectList = async () => {
  try {
    const response = await httpClient.get<UserJoinedProjectList>(
      '/user/me/project'
    );
    return response.data;
  } catch (error) {
    console.error('myJoinedProjectList:', error);
    throw error;
  }
};

export const getMyAppliedStatusList = async () => {
  try {
    const response = await httpClient.get<MyAppliedProjectStatusList>(
      '/user/me/applications'
    );
    return response.data;
  } catch (error) {
    console.error('myAppliedProjectList:', error);
    throw error;
  }
};
