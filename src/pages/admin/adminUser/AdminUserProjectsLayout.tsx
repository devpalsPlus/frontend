import { useParams } from 'react-router-dom';
import ContentTab from '../../../components/user/mypage/ContentTab';
import { ADMIN_ROUTE } from '../../../constants/routes';

const PROJECT_TABS = [
  {
    title: '지원한 프로젝트',
    url: `/admin/users/:userId/${ADMIN_ROUTE.projects}/${ADMIN_ROUTE.appliedProject}`,
    id: 0,
  },
  {
    title: '참여한 프로젝트',
    url: `/admin/users/:userId/${ADMIN_ROUTE.projects}/${ADMIN_ROUTE.joinedProject}`,
    id: 1,
  },
  {
    title: '기획한 프로젝트',
    url: `/admin/users/:userId/${ADMIN_ROUTE.projects}/${ADMIN_ROUTE.createdProject}`,
    id: 2,
  },
];

export default function AdminUserProjectsLayout() {
  const { userId } = useParams();

  const filter = PROJECT_TABS.map((tab) => ({
    ...tab,
    url: tab.url.replace(':userId', userId ?? ''),
  }));

  return (
    <div>
      <ContentTab filter={filter} $justifyContent='space-evenly' />
    </div>
  );
}
