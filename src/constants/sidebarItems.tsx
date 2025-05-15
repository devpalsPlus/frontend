import {
  UserGroupIcon,
  PencilSquareIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from './user/routes';

export const applicantsMenuItems = (projectId: number, isDone?: boolean) => {
  return [
    {
      label: '지원자 보기',
      path: `${ROUTES.manageProjectsRoot}/${projectId}`,
      icon: <UserPlusIcon />,
    },
    {
      label: '지원자 합/불 관리',
      path: `${ROUTES.manageProjectsPassNonPass}/${projectId}`,
      icon: <UserGroupIcon />,
    },
    {
      label: '공고 관리',
      path: `${ROUTES.modifyProject}/${projectId}`,
      icon: <PencilSquareIcon />,
      isDone: isDone,
    },
  ];
};
