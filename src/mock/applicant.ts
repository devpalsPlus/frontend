import { http, HttpResponse } from 'msw';
import mockApplicantsData from './mockApplicantsData.json';
import mockApplicantData from './mockApplicantData.json';

export const applicantList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/applicant`,
  () => {
    return HttpResponse.json(mockApplicantsData, {
      status: 200,
    });
  }
);

export const applicantInfo = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/applicant/:userId`,
  () => {
    return HttpResponse.json(mockApplicantData, {
      status: 200,
    });
  }
);
