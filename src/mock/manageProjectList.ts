import { HttpResponse, http } from 'msw';
import mockManageMyprojectList from './mockProjectList.json';

export const myProjectList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/my`,
  () => {
    return HttpResponse.json(mockManageMyprojectList, {
      status: 200,
    });
  }
);

export const sendResult = http.patch(
  `${import.meta.env.VITE_API_BASE_URL}/project/:projectId/is-done`,
  () => {
    return HttpResponse.json(
      { message: '지원자들에게 결과를 전송했어요' },
      {
        status: 200,
      }
    );
  }
);
