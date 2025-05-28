import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import AppRoutes from './AppRoutes';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
import ProtectAdminRoute from './ProtectAdminRoute';
import useAuthStore from '../store/authStore';

export default function MergeRoutes() {
  const isAdmin = useAuthStore((state) => state.userData?.admin) || false;

  const user = (
    <ToastProvider>
      <Outlet />
    </ToastProvider>
  );

  const router = createBrowserRouter([
    {
      element: (
        <ProtectAdminRoute>{isAdmin ? <Outlet /> : user}</ProtectAdminRoute>
      ),

      children: [
        ...AdminRoutes(),
        ...AppRoutes(),
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
