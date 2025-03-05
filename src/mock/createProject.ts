import { http, HttpResponse } from 'msw';

export const createProject = http.post(
  `${import.meta.env.VITE_API_BASE_URL}/project`,
  () => {
    return HttpResponse.json({
      status: 200,
    });
  }
);
