import { ROUTES } from '../routes';

export const NOTIFICATION_FILTER = [
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

export const ACTIVITY_FILTER = [
  { title: '내 댓글', url: ROUTES.comments, id: 0 },
  { title: '내 문의글', url: ROUTES.activityInquiries, id: 1 },
] as const;

export const ACTIVITY_FILTER_ADMIN = [
  { title: '댓글', url: ROUTES.comments, id: 0 },
  { title: '문의글', url: ROUTES.activityInquiries, id: 1 },
] as const;
