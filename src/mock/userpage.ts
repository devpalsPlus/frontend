import { http, HttpResponse } from 'msw';
import mockUserpageProfileData from './mockUserpageProfileData.json';
import mockUserpageAppliedProjectListData from './mockUserpageAppliedProjectListData.json';

export const userPageProfile = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/user/:id`,
  () => {
    return HttpResponse.json(mockUserpageProfileData, {
      status: 200,
    });
  }
);

export const userPageAppliedProjectList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/user/:id/project`,
  () => {
    return HttpResponse.json(mockUserpageAppliedProjectListData, {
      status: 200,
    });
  }
);
