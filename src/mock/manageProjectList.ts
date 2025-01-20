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
