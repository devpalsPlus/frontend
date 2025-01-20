import { http, HttpResponse } from 'msw';
import mockApplicantData from './mockApplicantData.json';

export const applicantList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/applicant`,
  () => {
    return HttpResponse.json(mockApplicantData, {
      status: 200,
    });
  }
);
