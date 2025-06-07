import { http, HttpResponse, passthrough } from 'msw';
import mockReports from './mockReports.json';
import mockUsers from './mockUsers.json';
import mockAllUsers from './mockAllUser.json';

export const reportsAll = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}reports`,
  () => {
    return HttpResponse.json(mockReports, { status: 200 });
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
    return HttpResponse.json(mockAllUsers, { status: 200 });
  }
);

export const passthroughAllGet = http.get(`*`, () => {
  return passthrough();
});

export const passthroughAllPost = http.post(`*`, () => {
  return passthrough();
});
