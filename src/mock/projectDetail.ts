import { http, HttpResponse } from 'msw';
import mockPrjectDetail from './mockProjectDetail.json';
import mockReports from './mockReports.json';

export const projectDetail = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}/project/:projectId`,
  () => {
    return HttpResponse.json(mockPrjectDetail, {
      status: 200,
    });
  }
);

export const reportsAll = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}reports`,
  () => {
    return HttpResponse.json(mockReports, { status: 200 });
  }
);
