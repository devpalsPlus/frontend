import { ManagedProject } from '../models/manageMyProject';
import { HttpResponse, http } from 'msw';

const mockManageMyprojectList: ManagedProject[] = [
  {
    id: 68,
    title: '클론코딩 사이드 프로젝트 모집 공고',
    totalMember: 3,
    isBeginner: true,
    recruitmentEndDate: '2025-02-15T00:00:00.000Z',
    ProjectSkillTag: [
      {
        projectId: 68,
        skillTagId: 12,
        SkillTag: {
          id: 12,
          name: 'Kotlin',
          img: 'https://picsum.photos/150',
          createdAt: '2025-01-02T15:09:19.000Z',
        },
      },
    ],
  },
  {
    id: 69,
    title:
      '클론코딩 사이드 프로젝트 모집 공고2222222222222222222222222222222222',
    totalMember: 3,
    isBeginner: true,
    recruitmentEndDate: '2025-02-15T00:00:00.000Z',
    ProjectSkillTag: [
      {
        projectId: 69,
        skillTagId: 12,
        SkillTag: {
          id: 12,
          name: 'Kotlin',
          img: 'https://picsum.photos/150',
          createdAt: '2025-01-02T15:09:19.000Z',
        },
      },
    ],
  },
  {
    id: 70,
    title: '클론코딩 사이드 프로젝트 모집 공고',
    totalMember: 3,
    isBeginner: true,
    recruitmentEndDate: '2025-02-15T00:00:00.000Z',
    ProjectSkillTag: [
      {
        projectId: 70,
        skillTagId: 12,
        SkillTag: {
          id: 12,
          name: 'Kotlin',
          img: 'https://picsum.photos/150',
          createdAt: '2025-01-02T15:09:19.000Z',
        },
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
