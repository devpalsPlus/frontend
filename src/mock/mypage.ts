import { http, HttpResponse } from 'msw';
import mockMypageProfileData from './mockMypageProfileData.json';
import mockPositionTagData from './mockPositionTagData.json';
import mockSkillTagData from './mockSkillTagData.json';

export const myPageProfile = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/user/me`,
  () => {
    return HttpResponse.json(mockMypageProfileData, {
      status: 200,
    });
  }
);

export const myPagePositionTag = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/position-tag`,
  () => {
    return HttpResponse.json(mockPositionTagData, {
      status: 200,
    });
  }
);

export const myPageSkillTag = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/skill-tag`,
  () => {
    return HttpResponse.json(mockSkillTagData, {
      status: 200,
    });
  }
);
