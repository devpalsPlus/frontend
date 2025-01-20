import { http, HttpResponse } from 'msw';
import mockPrjectDetail from './mockProjectDetail.json';

export const projectDetail = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId`,
  () => {
    return HttpResponse.json(mockPrjectDetail, {
      status: 200,
    });
  }
);
