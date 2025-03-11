import { http, HttpResponse } from 'msw';
import mockApplicantsData from './mockApplicantsData.json';
import mockApplicantData from './mockApplicantData.json';
import mockPassNonPassListData from './mockPassNonPassListData.json';

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

export const passNonPassList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/applicant/summary`,
  () => {
    return HttpResponse.json(mockPassNonPassListData, {
      status: 200,
    });
  }
);

export const passNonPass = http.patch(
  `${
    import.meta.env.VITE_API_BASE_URL
  }/project/:projectId/applicant/:userId/status`,
  () => {
    return HttpResponse.json(
      { message: '합/불합 상태가 수정되었습니다.' },
      {
        status: 200,
      }
    );
  }
);

export const createApplicant = http.post(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/applicant`,
  () => {
    return HttpResponse.json({
      status: 200,
    });
  }
);
