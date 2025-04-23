import { ROUTES } from './routes';

export const notificationFilter = [
  { title: '전체', url: `` },
  {
    title: '지원한 프로젝트',
    url: ROUTES.notificationsAppliedProjects,
  },
  {
    title: '지원자 확인',
    url: ROUTES.notificationsCheckedApplicants,
  },
  {
    title: '댓글&답변',
    url: ROUTES.comments,
  },
] as const;

export const activityFilter = [
  { title: '내 댓글', url: ROUTES.comments },
  { title: '내 문의글', url: ROUTES.activityInquiries },
] as const;
