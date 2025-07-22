import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { lazy, Suspense } from 'react';
import { ADMIN_ROUTE } from '../constants/routes';
import ProtectAdminRoute from './ProtectAdminRoute';
import { Navigate } from 'react-router-dom';
import { Spinner } from '../components/common/loadingSpinner/LoadingSpinner.styled';
import AdminUserProjectsLayout from '../pages/admin/adminUser/AdminUserProjectsLayout';

const AdminUserDetail = lazy(
  () => import('../components/admin/adminUserDetail/AdminUserDetail')
);
const UserProjects = lazy(
  () => import('../components/user/userPage/userProjectList/UserProjectList')
);
const ActivityLog = lazy(
  () => import('../components/user/mypage/activityLog/ActivityLog')
);

const Sidebar = lazy(
  () => import('../components/common/admin/sidebar/AdminSidebar')
);
const Main = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Notice = lazy(() => import('../pages/admin/adminNotice/AdminNotice'));
const NoticeList = lazy(
  () => import('../pages/admin/adminNotice/adminNoticeList/AdminNoticeListPage')
);
const NoticeWrite = lazy(
  () =>
    import('../pages/admin/adminNotice/adminNoticeWrite/AdminNoticeWritePage')
);
const NoticeDetail = lazy(
  () => import('../pages/admin/adminNoticeDetail/AdminNoticeDetail')
);
const Profile = lazy(
  () => import('../components/user/mypage/myProfile/profile/Profile')
);
const FAQ = lazy(() => import('../pages/admin/adminFAQ/AdminFAQ'));
const FAQList = lazy(
  () => import('../pages/admin/adminFAQ/adminFAQList/AdminFAQListPage')
);
const FAQWrite = lazy(
  () => import('../pages/admin/adminFAQ/adminFAQWrite/AdminFAQWritePage')
);
const Banner = lazy(() => import('../pages/admin/adminBanner/AdminBanner'));
const SkillTagPage = lazy(
  () => import('../pages/admin/adminTags/skill/AdminSkillTagsPage')
);
const SkillTags = lazy(
  () => import('../components/admin/adminTags/skills/AdminSkillTags')
);
const PositionTagPage = lazy(
  () => import('../pages/admin/adminTags/position/AdminPositionTagsPage')
);
const PositionTags = lazy(
  () => import('../components/admin/adminTags/positions/AdminPositionTags')
);
const AdminUser = lazy(() => import('../pages/admin/adminUser/AdminUser'));
const Reports = lazy(() => import('../pages/admin/adminReports/AdminReports'));
const Inquiries = lazy(
  () => import('../pages/admin/adminInquiries/AdminInquiries')
);
const InquiryList = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryList/AdminInquiryListPage'
    )
);
const InquiryDetail = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryDetail/AdminInquiryDetailPage'
    )
);
const InquiryAnswerContent = lazy(
  () => import('../components/admin/adminInquiry/AdminInquiryAnswer')
);
const InquiryAnswerWrite = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryWrite/AdminInquiryWritePage'
    )
);
const Manage = lazy(() => import('../pages/admin/adminManage/AdminManage'));
const ActivityLogComments = lazy(
  () =>
    import(
      '../components/user/mypage/activityLog/commentsActivity/CommentsActivity'
    )
);
const ActivityLogInquiries = lazy(
  () => import('../components/user/mypage/activityLog/inquiries/Inquiries')
);

const NotificationsAppliedProjects = lazy(
  () =>
    import(
      '../components/user/mypage/notifications/appliedProjects/AppliedProjects'
    )
);
// const NotificationsAll = lazy(
//   () => import('../components/user/mypage/notifications/all/All')
// );

export const AdminRoutes = () => {
  const routeList = [
    {
      path: ADMIN_ROUTE.admin,
      element: (
        <Suspense fallback={<Spinner />}>
          <ProtectAdminRoute>
            <Sidebar />
          </ProtectAdminRoute>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: ADMIN_ROUTE.notice,
          element: <Notice />,
          children: [
            { index: true, element: <NoticeList /> },
            {
              path: ADMIN_ROUTE.write,
              element: <NoticeWrite />,
            },
            {
              path: `${ADMIN_ROUTE.detail}/:noticeId`,
              element: <NoticeDetail />,
            },
            {
              path: `${ADMIN_ROUTE.detail}/:noticeId/${ADMIN_ROUTE.modification}`,
              element: <NoticeWrite />,
            },
          ],
        },
        {
          path: ADMIN_ROUTE.faq,
          element: <FAQ />,
          children: [
            { index: true, element: <FAQList /> },
            { path: ADMIN_ROUTE.write, element: <FAQWrite /> },
            {
              path: `${ADMIN_ROUTE.modification}/:faqId`,
              element: <FAQWrite />,
            },
          ],
        },
        {
          path: ADMIN_ROUTE.banner,
          element: <Banner />,
        },
        {
          path: ADMIN_ROUTE.skillTags,
          element: <SkillTagPage />,
          children: [{ index: true, element: <SkillTags /> }],
        },
        {
          path: ADMIN_ROUTE.positionTags,
          element: <PositionTagPage />,
          children: [{ index: true, element: <PositionTags /> }],
        },
        {
          path: ADMIN_ROUTE.users,
          element: <AdminUser />,
        },
        {
          path: `${ADMIN_ROUTE.users}/:userId`,
          element: <AdminUserDetail />,
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: `${ADMIN_ROUTE.log}`,
              element: <ActivityLog />,
              children: [
                {
                  index: true,
                  element: <Navigate to={ADMIN_ROUTE.comments} replace />,
                },
                {
                  path: `${ADMIN_ROUTE.comments}`,
                  element: <ActivityLogComments />,
                },
                {
                  path: `${ADMIN_ROUTE.inquiries}`,
                  element: <ActivityLogInquiries />,
                },
              ],
            },
            {
              path: `${ADMIN_ROUTE.projects}`,
              element: <AdminUserProjectsLayout />,
              children: [
                {
                  index: true,
                  element: <Navigate to={ADMIN_ROUTE.appliedProject} replace />,
                },
                {
                  path: `${ADMIN_ROUTE.appliedProject}`,
                  element: <NotificationsAppliedProjects />,
                },
                {
                  path: `${ADMIN_ROUTE.joinedProject}`,
                  element: <UserProjects />,
                },
                {
                  path: `${ADMIN_ROUTE.createdProject}`,
                  element: <UserProjects />,
                },
              ],
            },
          ],
        },
        {
          path: ADMIN_ROUTE.reports,
          element: <Reports />,
        },
        // {
        //   path: `${ADMIN_ROUTE.reports}/:id`,
        //   element: <AdminReportDetail />,
        // },
        {
          path: ADMIN_ROUTE.inquiries,
          element: <Inquiries />,
          children: [
            { index: true, element: <InquiryList /> },
            {
              path: `${ADMIN_ROUTE.detail}/:inquiryId`,
              element: <InquiryDetail />,
              children: [
                { index: true, element: <InquiryAnswerContent /> },
                {
                  path: ADMIN_ROUTE.write,
                  element: <InquiryAnswerWrite />,
                },
                {
                  path: ADMIN_ROUTE.modification,
                  element: <InquiryAnswerWrite />,
                },
              ],
            },
          ],
        },
        {
          path: ADMIN_ROUTE.manage,
          element: <Manage />,
        },
      ],
    },
  ];

  const newAdminRoutes = routeList.map((items) => {
    return { ...items, errorElement: <NotFoundPage /> };
  });

  return newAdminRoutes;
};

export default AdminRoutes;
