import { ADMIN_ROUTE } from '../routes';

export const PROJECT_TABS = [
  {
    title: '지원한 프로젝트',
    url: `${ADMIN_ROUTE.appliedProject}`,
    id: 1,
  },
  {
    title: '참여한 프로젝트',
    url: `${ADMIN_ROUTE.joinedProject}`,
    id: 2,
  },
  {
    title: '기획한 프로젝트',
    url: `${ADMIN_ROUTE.createdProject}`,
    id: 3,
  },
] as const;
