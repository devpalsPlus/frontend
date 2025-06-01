import { http, HttpResponse } from 'msw';

export const login = http.post(
  `${import.meta.env.VITE_APP_API_BASE_URL}auth/login`,
  () => {
    return HttpResponse.json({
      status: 200,
    });
  }
);
