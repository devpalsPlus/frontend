import { http, HttpResponse } from 'msw';
import mockMypageProfileData from './mockMypageProfileData.json';
import mockPositionTagData from './mockPositionTagData.json';
import mockSkillTagData from './mockSkillTagData.json';
import mockMypageJoinedProjectListData from './mockMypageJoinedProjectListData.json';
import mockMypageAppliedProjectListData from './mockMypageAppliedProjectListData.json';

export const myPageProfile = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/me`,
  () => {
    return HttpResponse.json(mockMypageProfileData, {
      status: 200,
    });
  }
);

export const myPagePositionTag = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}position-tag`,
  () => {
    return HttpResponse.json(mockPositionTagData, {
      status: 200,
    });
  }
);

export const myPageSkillTag = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}skill-tag`,
  () => {
    return HttpResponse.json(mockSkillTagData, {
      status: 200,
    });
  }
);

export const myPageJoinedProjectList = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/me/project`,
  () => {
    return HttpResponse.json(mockMypageJoinedProjectListData, {
      status: 200,
    });
  }
);

export const myPageAppliedProjectList = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/me/applications`,
  () => {
    return HttpResponse.json(mockMypageAppliedProjectListData, {
      status: 200,
    });
  }
);

export const mypageEditProfile = http.put(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/me`,
  () => {
    return HttpResponse.json({
      status: 200,
    });
  }
);
