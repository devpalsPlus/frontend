import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import AppRoutes from './AppRoutes';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
import ProtectAdminRoute from './ProtectAdminRoute';
import { NotificationProvider } from '../components/user/notificationLive/NotificationProvider';
import NotificationInitializer from '../components/user/notificationLive/NotificationInitializer';

export default function MergeRoutes() {
  const router = createBrowserRouter([
    {
      element: (
        <NotificationProvider>
          <NotificationInitializer />
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </NotificationProvider>
      ),
      children: [...AppRoutes()],
    },
    {
      element: (
        <ProtectAdminRoute>
          <Outlet />
        </ProtectAdminRoute>
      ),
      children: [...AdminRoutes()],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
}
