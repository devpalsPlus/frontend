import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import AppRoutes from './AppRoutes';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
import ProtectAdminRoute from './ProtectAdminRoute';

export default function MergeRoutes() {
  const router = createBrowserRouter([
    {
      element: (
        <ToastProvider>
          <Outlet />
        </ToastProvider>
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
