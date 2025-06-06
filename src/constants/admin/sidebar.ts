import { ADMIN_ROUTE } from '../routes';

export const SIDEBAR_LIST = {
  main: [
    {
      name: 'mainPage',
      title: '메인페이지',
      router: ADMIN_ROUTE.admin,
    },
    {
      name: 'movedSite',
      title: '사이트 이동',
      router: ADMIN_ROUTE.devPals,
    },
  ],
  service: [
    {
      name: 'notice',
      title: '공지사항',
      router: ADMIN_ROUTE.notice,
    },
    {
      name: 'faq',
      title: 'FAQ',
      router: ADMIN_ROUTE.faq,
    },
    {
      name: 'banner',
      title: '배너관리',
      router: ADMIN_ROUTE.banner,
    },
    {
      name: 'tags',
      title: '태그관리',
      router: ADMIN_ROUTE.tags,
    },
  ],
  user: [
    {
      name: 'allUser',
      title: '전체 회원 조회',
      router: ADMIN_ROUTE.allUser,
    },
    {
      name: 'reports',
      title: '신고검토',
      router: ADMIN_ROUTE.reports,
    },
    {
      name: 'inquiries',
      title: '문의확인',
      router: ADMIN_ROUTE.inquiries,
    },
    {
      name: 'manage',
      title: '공고/댓글 관리',
      router: ADMIN_ROUTE.manage,
    },
  ],
} as const;
