import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LoadingSpinner from '../components/common/loadingSpinner/LoadingSpinner';
import { ROUTES } from '../constants/routes';
import useAuthStore from '../store/authStore';
import ProtectRoute from '../components/common/ProtectRoute';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import QueryErrorBoundary from '../components/common/error/QueryErrorBoundary';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const ChangePassword = lazy(
  () => import('../pages/changePassword/ChangePassword')
);
const Main = lazy(() => import('../pages/main/Index'));
const Layout = lazy(() => import('../components/common/layout/Layout'));
const Home = lazy(() => import('../pages/home/Home'));
const FAQ = lazy(() => import('../pages/customerService/faq/FAQ'));
const Notice = lazy(() => import('../pages/customerService/notice/Notice'));
const Inquiry = lazy(() => import('../pages/customerService/inquiry/Inquiry'));
const MyPage = lazy(() => import('../pages/mypage/MyPage'));
const UserPage = lazy(() => import('../pages/userpage/UserPage'));
const Apply = lazy(() => import('../pages/apply/ApplyStep'));
const CreateProject = lazy(
  () => import('../pages/createProject/CreateProject')
);
const ProjectDetail = lazy(
  () => import('../pages/projectDetail/ProjectDetail')
);
const MyProjectList = lazy(
  () => import('../pages/manage/myProjectList/MyProjectList')
);
const MyProfile = lazy(
  () => import('../components/mypage/myProfile/MyProfile')
);
const MyProjectVolunteer = lazy(
  () => import('../pages/manage/myProjectVolunteer/MyProjectVolunteer')
);
const MyProjectVolunteersPass = lazy(
  () =>
    import('../pages/manage/myProjectParticipantsPass/MyProjectVolunteersPass')
);
const MyJoinProjects = lazy(
  () => import('../components/mypage/joinedProject/MyJoinProjects')
);
const MyNotifications = lazy(
  () => import('../components/mypage/notifications/Notifications')
);
const NotificationsAll = lazy(
  () => import('../components/mypage/notifications/all/All')
);
const NotificationsAppliedProjects = lazy(
  () =>
    import('../components/mypage/notifications/appliedProjects/AppliedProjects')
);
const MyActivityLog = lazy(
  () => import('../components/mypage/activityLog/ActivityLog')
);
const ActivityLogComments = lazy(
  () =>
    import('../components/mypage/activityLog/commentsActivity/CommentsActivity')
);
const ActivityLogInquiries = lazy(
  () => import('../components/mypage/activityLog/inquiries/Inquiries')
);
const UserProfile = lazy(
  () => import('../components/userPage/userProfile/UserProfile')
);
const UserJoinProject = lazy(
  () => import('../components/userPage/joinedProject/UserJoinProject')
);
const ModifyProject = lazy(
  () => import('../pages/modifyProject/ModifyProject')
);

const AppRoutes = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const routeList = [
    {
      path: ROUTES.home,
      element: <Main />,
    },
    {
      path: ROUTES.login,
      element: isLoggedIn ? <Navigate to={ROUTES.main} replace /> : <Login />,
    },
    {
      path: ROUTES.signup,
      element: isLoggedIn ? (
        <Navigate to={ROUTES.main} replace />
      ) : (
        <Register />
      ),
    },
    {
      path: ROUTES.changePw,
      element: <ChangePassword />,
    },
    {
      path: ROUTES.main,
      element: (
        <QueryErrorBoundary>
          <Layout>
            <Home />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.FAQ,
      element: (
        <QueryErrorBoundary>
          <Layout>
            <FAQ />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.notice,
      element: (
        <QueryErrorBoundary>
          <Layout>
            <Notice />
          </Layout>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.inquiry,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Layout>
              <Inquiry />
            </Layout>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.createProject,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Layout>
              <CreateProject />
            </Layout>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: `${ROUTES.apply}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Layout>
              <Apply />
            </Layout>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: `${ROUTES.projectDetail}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Layout>
              <ProjectDetail />
            </Layout>
          </Suspense>
        </QueryErrorBoundary>
      ),
    },
    {
      path: `${ROUTES.modifyProject}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Layout>
              <ModifyProject />
            </Layout>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.manageProjectsRoot,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <MyProjectList />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: ROUTES.mypage,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <MyPage />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
      children: [
        {
          path: '',
          element: <MyProfile />,
        },
        {
          path: ROUTES.mypageJoinedProjects,
          element: <MyJoinProjects />,
        },
        {
          path: ROUTES.myPageNotifications,
          element: <MyNotifications />,
          children: [
            { index: true, element: <NotificationsAll /> },
            {
              path: ROUTES.notificationsAppliedProjects,
              element: <NotificationsAppliedProjects />,
            },
            {
              path: ROUTES.notificationsCheckedApplicants,
              element: <NotificationsAll />,
            },
            {
              path: ROUTES.comments,
              element: <NotificationsAll />,
            },
          ],
        },
        {
          path: ROUTES.myPageActivityLog,
          element: <MyActivityLog />,
          children: [
            { index: true, element: <Navigate to={ROUTES.comments} replace /> },
            { path: ROUTES.comments, element: <ActivityLogComments /> },
            {
              path: ROUTES.activityInquiries,
              element: <ActivityLogInquiries />,
            },
          ],
        },
      ],
    },
    {
      path: `${ROUTES.userpage}/:userId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <UserPage />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
      children: [
        {
          path: '',
          element: <UserProfile />,
        },
        {
          path: ROUTES.userJoinedProject,
          element: <UserJoinProject />,
        },
      ],
    },
    {
      path: `${ROUTES.manageProjectsRoot}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <MyProjectVolunteer />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
    {
      path: `${ROUTES.manageProjectsPassNonPass}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <MyProjectVolunteersPass />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </QueryErrorBoundary>
      ),
    },
  ];

  const newRouteList = routeList.map((item) => {
    return {
      ...item,
      errorElement: <NotFoundPage />,
    };
  });

  const router = createBrowserRouter([
    {
      element: (
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      ),
      children: [...newRouteList, { path: '*', element: <NotFoundPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
