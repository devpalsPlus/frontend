import { ManagedProject } from '../models/manageMyProject';
import { HttpResponse, http } from 'msw';

const mockManageMyprojectList: ManagedProject[] = [
  {
    id: 1,
    title: '클론코딩 사이드 프로젝트 팀원 모집',
    totalMember: 1,
    recruitmentEndDate: '2024-12-29',
    isBeginner: true,
    ProjectSkillTag: [
      {
        id: 1,
        name: 'TypeScript',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
      {
        id: 2,
        name: 'React',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
    ],
  },
  {
    id: 2,
    title:
      '클론코딩 사이드 프로젝트 팀원 모집222222222222222222222222222222222222222222222222222222222',
    totalMember: 1,
    recruitmentEndDate: '2024-12-29',
    isBeginner: true,
    ProjectSkillTag: [
      {
        id: 1,
        name: 'TypeScript',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
      {
        id: 2,
        name: 'React',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
      {
        id: 2,
        name: 'React',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
      {
        id: 2,
        name: 'React',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
    ],
  },
  {
    id: 3,
    title: '클론코딩 사이드 프로젝트 팀원 모집3',
    totalMember: 1,
    recruitmentEndDate: '2024-12-29',
    isBeginner: true,
    ProjectSkillTag: [
      {
        id: 1,
        name: 'TypeScript',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
      {
        id: 2,
        name: 'React',
        img: 'https://picsum.photos/150',
        createdAt: '2024-12-29',
      },
    ],
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
