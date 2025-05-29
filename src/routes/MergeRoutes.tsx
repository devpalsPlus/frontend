import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import AppRoutes from './AppRoutes';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
import ProtectAdminRoute from './ProtectAdminRoute';
import ProtectRoute from '../components/common/ProtectRoute';
import { ROUTES } from '../constants/routes';

export default function MergeRoutes() {
  const router = createBrowserRouter([
    {
      element: (
        <ProtectAdminRoute>
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </ProtectAdminRoute>
      ),
      children: [...AppRoutes(), { path: '*', element: <NotFoundPage /> }],
    },
    {
      element: (
        <ProtectAdminRoute>
          <ProtectRoute redirectUrl={ROUTES.main}>
            <Outlet />
          </ProtectRoute>
        </ProtectAdminRoute>
      ),
      children: [...AdminRoutes(), { path: '*', element: <NotFoundPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
