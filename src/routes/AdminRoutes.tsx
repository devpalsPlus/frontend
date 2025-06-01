import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { lazy } from 'react';
import { ADMIN_ROUTE } from '../constants/routes';
import ProtectAdminRoute from './ProtectAdminRoute';

const Sidebar = lazy(
  () => import('../components/common/admin/sidebar/AdminSidebar')
);
const Main = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Notice = lazy(() => import('../pages/admin/adminNotice/AdminNotice'));
const NoticeList = lazy(
  () => import('../pages/admin/adminNotice/adminNoticeList/AdminNoticeList')
);
const NoticeDetail = lazy(
  () => import('../pages/admin/adminNoticeDetail/AdminNoticeDetail')
);
const Banner = lazy(() => import('../pages/admin/adminBanner/AdminBanner'));
const Tags = lazy(() => import('../pages/admin/adminTags/AdminTags'));
const AllUser = lazy(() => import('../pages/admin/adminAllUser/AdminAllUser'));
const Reports = lazy(() => import('../pages/admin/adminReports/AdminReports'));
const Inquiries = lazy(
  () => import('../pages/admin/adminInquiries/AdminInquiries')
);
const Manage = lazy(() => import('../pages/admin/adminManage/AdminManage'));

export const AdminRoutes = () => {
  const routeList = [
    {
      path: ADMIN_ROUTE.admin,
      element: (
        <ProtectAdminRoute>
          <Sidebar />
        </ProtectAdminRoute>
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
              path: `${ADMIN_ROUTE.detail}/:noticeId`,
              element: <NoticeDetail />,
            },
          ],
        },
        {
          path: ADMIN_ROUTE.banner,
          element: <Banner />,
        },
        {
          path: ADMIN_ROUTE.tags,
          element: <Tags />,
        },
        {
          path: ADMIN_ROUTE.allUser,
          element: <AllUser />,
        },
        {
          path: ADMIN_ROUTE.reports,
          element: <Reports />,
        },
        {
          path: ADMIN_ROUTE.inquiries,
          element: <Inquiries />,
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
