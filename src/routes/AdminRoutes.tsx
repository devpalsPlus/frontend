import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { lazy } from 'react';
import { ADMIN_ROUTE } from '../constants/routes';
import ProtectAdminRoute from './ProtectAdminRoute';

const Sidebar = lazy(
  () => import('../components/common/admin/sidebar/AdminSidebar')
);

export const AdminRoutes = () => {
  const routeList = [
    {
      path: ADMIN_ROUTE.admin,
      element: (
        <ProtectAdminRoute>
          <Sidebar />
        </ProtectAdminRoute>
      ),
    },
  ];

  const newAdminRoutes = routeList.map((items) => {
    return { ...items, errorElement: <NotFoundPage /> };
  });

  return newAdminRoutes;
};

export default AdminRoutes;
