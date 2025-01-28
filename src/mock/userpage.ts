import { http, HttpResponse } from 'msw';
import mockUserpageProfileData from './mockUserpageProfileData.json';

export const userPageProfile = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/user/:id`,
  () => {
    return HttpResponse.json(mockUserpageProfileData, {
      status: 200,
    });
  }
);
