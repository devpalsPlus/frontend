import { http, HttpResponse } from 'msw';
import mockUserpageProfileData from './mockUserpageProfileData.json';
import mockUserpageAppliedProjectListData from './mockUserpageAppliedProjectListData.json';
import mockUsers from './mockUsers.json';

export const userPageProfile = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/:id`,
  () => {
    return HttpResponse.json(mockUserpageProfileData, {
      status: 200,
    });
  }
);

export const userPageAppliedProjectList = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}user/:id/project`,
  () => {
    return HttpResponse.json(mockUserpageAppliedProjectListData, {
      status: 200,
    });
  }
);

export const userAllPreview = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}users/preview`,
  () => {
    return HttpResponse.json(mockUsers, { status: 200 });
  }
);

export const userAll = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}users`,
  () => {
    return HttpResponse.json(mockUsers, { status: 200 });
  }
);
