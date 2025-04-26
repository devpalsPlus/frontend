import { ROUTES } from './routes';

export const notificationFilter = [
  { title: '전체', url: ``, id: 0 },
  {
    title: '지원한 프로젝트',
    url: ROUTES.notificationsAppliedProjects,
    id: 1,
    linkUrl: `/project-detail`,
  },
  {
    title: '지원자 확인',
    url: ROUTES.notificationsCheckedApplicants,
    id: 2,
    linkUrl: `/project-detail`,
  },
  {
    title: '댓글&답변',
    url: ROUTES.comments,
    id: 3,
    linkUrl: `/project-detail`,
  },
] as const;

export const activityFilter = [
  { title: '내 댓글', url: ROUTES.comments },
  { title: '내 문의글', url: ROUTES.activityInquiries },
] as const;
