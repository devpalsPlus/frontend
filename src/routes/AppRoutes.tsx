import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LoadingSpinner from '../components/common/loadingSpinner/LoadingSpinner';
import useAuthStore from '../store/authStore';
import ProtectRoute from '../components/common/ProtectRoute';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import QueryErrorBoundary from '../components/common/error/QueryErrorBoundary';
import { ToastProvider } from '../components/common/Toast/ToastProvider';
import { ROUTES } from '../constants/user/routes';
const Login = lazy(() => import('../pages/login/Login'));
const LoginSuccess = lazy(() => import('../pages/login/LoginSuccess'));
const Register = lazy(() => import('../pages/user/register/Register'));
const ChangePassword = lazy(
  () => import('../pages/user/changePassword/ChangePassword')
);
const Main = lazy(() => import('../pages/user/main/Index'));
const Layout = lazy(() => import('../components/common/layout/Layout'));
const Home = lazy(() => import('../pages/user/home/Home'));
const FAQ = lazy(() => import('../pages/user/customerService/faq/FAQ'));
const Notice = lazy(
  () => import('../pages/user/customerService/notice/Notice')
);
const NoticeDetail = lazy(
  () => import('../pages/user/customerService/noticeDetail/NoticeDetail')
);
const Inquiry = lazy(
  () => import('../components/user/customerService/inquiry/Inquiry')
);
const MyPage = lazy(() => import('../pages/user/mypage/MyPage'));
const UserPage = lazy(() => import('../pages/user/userpage/UserPage'));
const Apply = lazy(() => import('../pages/user/apply/ApplyStep'));
const CreateProject = lazy(
  () => import('../pages/user/createProject/CreateProject')
);
const ProjectDetail = lazy(
  () => import('../pages/user/projectDetail/ProjectDetail')
);
const MyProjectList = lazy(
  () => import('../pages/user/manage/myProjectList/MyProjectList')
);
const MyProfile = lazy(
  () => import('../components/user/mypage/myProfile/MyProfile')
);
const Profile = lazy(
  () => import('../components/user/mypage/myProfile/profile/Profile')
);
const ProfileEdit = lazy(
  () => import('../components/user/mypage/myProfile/editProfile/EditProfile')
);
const MyProjectVolunteer = lazy(
  () => import('../pages/user/manage/myProjectVolunteer/MyProjectVolunteer')
);
const MyProjectVolunteersPass = lazy(
  () =>
    import(
      '../pages/user/manage/myProjectParticipantsPass/MyProjectVolunteersPass'
    )
);
const MyJoinProjects = lazy(
  () => import('../components/user/mypage/joinedProject/MyJoinProjects')
);
const MyNotifications = lazy(
  () => import('../components/user/mypage/notifications/Notifications')
);
const NotificationsAll = lazy(
  () => import('../components/user/mypage/notifications/all/All')
);
const NotificationsAppliedProjects = lazy(
  () =>
    import(
      '../components/user/mypage/notifications/appliedProjects/AppliedProjects'
    )
);
const MyActivityLog = lazy(
  () => import('../components/user/mypage/activityLog/ActivityLog')
);
const ActivityLogComments = lazy(
  () =>
    import(
      '../components/user/mypage/activityLog/commentsActivity/CommentsActivity'
    )
);
const ActivityLogInquiries = lazy(
  () => import('../components/user/mypage/activityLog/inquiries/Inquiries')
);
const UserProfile = lazy(
  () => import('../components/user/userPage/userProfile/UserProfile')
);
const UserProjects = lazy(
  () => import('../components/user/userPage/userProjectList/UserProjectList')
);
const ModifyProject = lazy(
  () => import('../pages/user/modifyProject/ModifyProject')
);
const Evaluation = lazy(() => import('../pages/user/evaluation/Evaluation'));

const AppRoutes = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

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
      path: ROUTES.loginSuccess,
      element: <LoginSuccess />,
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
      path: ROUTES.customerService,
      element: (
        <QueryErrorBoundary>
          <Layout>
            <Outlet />
          </Layout>
        </QueryErrorBoundary>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={ROUTES.FAQ} replace />,
        },
        {
          path: ROUTES.FAQ,
          element: <FAQ />,
        },
        {
          path: ROUTES.notice,
          element: <Notice />,
        },
        {
          path: `${ROUTES.noticeDetail}/:noticeId`,
          element: <NoticeDetail />,
        },
      ],
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
          children: [
            { index: true, element: <Profile /> },
            {
              path: ROUTES.mypageEdit,
              element: <ProfileEdit />,
            },
          ],
        },
        {
          path: ROUTES.joinedProjects,
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
          children: [{ index: true, element: <Profile /> }],
        },
        {
          path: ROUTES.joinedProjects,
          element: <UserProjects />,
        },
        {
          path: ROUTES.managedProjects,
          element: <UserProjects />,
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
    {
      path: `${ROUTES.evaluation}/:projectId`,
      element: (
        <QueryErrorBoundary>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <Evaluation />
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
