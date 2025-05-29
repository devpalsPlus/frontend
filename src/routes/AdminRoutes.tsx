import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { lazy } from 'react';
import { ADMIN_ROUTE } from '../constants/routes';
import ProtectAdminRoute from './ProtectAdminRoute';
import { Outlet } from 'react-router-dom';

const Sidebar = lazy(
  () => import('../components/common/admin/sidebar/AdminSidebar')
);
const Main = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Notice = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Banner = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Tags = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const AllUser = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Reports = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Inquiries = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Manage = lazy(() => import('../pages/admin/adminMain/AdminMain'));

export const AdminRoutes = () => {
  const routeList = [
    {
      path: ADMIN_ROUTE.admin,
      element: (
        <ProtectAdminRoute>
          <Sidebar />
          <Outlet />
        </ProtectAdminRoute>
      ),
      children: [
        { index: true, element: <Main /> },
        {
          path: ADMIN_ROUTE.notice,
          element: <Notice />,
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
