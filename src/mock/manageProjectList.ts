import { ManageMyprojectList } from '../models/manageMyProjectList';
import { HttpResponse, http } from 'msw';

const mockManageMyprojectList: ManageMyprojectList[] = [
  {
    title: '프로젝트 제목1',
    description: '프로젝트 설명1',
    totalMember: 1,
    startDate: '2024-12-29',
    positionId: 1,
    estimatedPeriod: '7',
    methodId: 2,
    isBeginner: true,
  },
  {
    title: '프로젝트 제목2',
    description: '프로젝트 설명2',
    totalMember: 2,
    startDate: '2024-12-20',
    positionId: 1,
    estimatedPeriod: '7',
    methodId: 2,
    isBeginner: true,
  },
];

export const myProjectList = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/my`,
  () => {
    return HttpResponse.json(mockManageMyprojectList, {
      status: 200,
    });
  }
);
