import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LoadingSpinner from '../components/common/loadingSpinner/LoadingSpinner';
import { ROUTES } from '../constants/routes';
import useAuthStore from '../store/authStore';
import ProtectRoute from '../components/common/ProtectRoute';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const ChangePassword = lazy(
  () => import('../pages/changePassword/ChangePassword')
);
// const Main = lazy(() => import('../pages/main/Main'));
const Layout = lazy(() => import('../components/common/layout/Layout'));
const Home = lazy(() => import('../pages/home/Home'));
const MyPage = lazy(() => import('../pages/mypage/MyPage'));
const UserPage = lazy(() => import('../pages/userpage/UserPage'));
const Apply = lazy(() => import('../pages/apply/Apply'));

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
  () => import('../components/mypage/myProfile/myProfile')
);
const MyApplyProject = lazy(
  () => import('../components/mypage/appliedProject/MyApplyProject')
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
const UserProfile = lazy(
  () => import('../components/userPage/userProfile/UserProfile')
);
const UserJoinProject = lazy(
  () => import('../components/userPage/joinedProject/UserJoinProject')
);

const ModifyProject = lazy(
  () => import('../pages/modifyProject/ModifyProject')
);
const ApplicantViewLayout = lazy(
  () => import('../components/common/layout/ApplicantViewLayout')
);

const AppRoutes = () => {
  const { isLoggedIn } = useAuthStore();

  const routeList = [
    // {
    //   path: ROUTES.main,
    //   element: <Main />,
    // },
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
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: ROUTES.createProject,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Layout>
            <CreateProject />
          </Layout>
        </ProtectRoute>
      ),
    },
    {
      path: `${ROUTES.apply}/:projectId`,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Layout>
            <Apply />
          </Layout>
        </ProtectRoute>
      ),
    },
    {
      path: `${ROUTES.projectDetail}/:projectId`,
      element: (
        <Layout>
          <ProjectDetail />
        </Layout>
      ),
    },
    {
      path: `${ROUTES.modifyProject}/:projectId`,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Layout>
            <ModifyProject />
          </Layout>
        </ProtectRoute>
      ),
    },
    {
      path: ROUTES.manageProjectsRoot,
      element: (
        <>
          <ProtectRoute redirectUrl={ROUTES.login}>
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <MyProjectList />
              </Layout>
            </Suspense>
          </ProtectRoute>
        </>
      ),
    },
    {
      path: ROUTES.mypage,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Suspense fallback={<LoadingSpinner />}>
            <Layout>
              <MyPage />
            </Layout>
          </Suspense>
        </ProtectRoute>
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
          path: ROUTES.mypageAppliedProjects,
          element: <MyApplyProject />,
        },
      ],
    },
    {
      path: `${ROUTES.userpage}/:userId`,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Suspense fallback={<LoadingSpinner />}>
            <Layout>
              <UserPage />
            </Layout>
          </Suspense>
        </ProtectRoute>
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
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Suspense fallback={<LoadingSpinner />}>
            <ApplicantViewLayout>
              <MyProjectVolunteer />
            </ApplicantViewLayout>
          </Suspense>
        </ProtectRoute>
      ),
    },
    {
      path: `${ROUTES.manageProjectsPassNonPass}/:projectId`,
      element: (
        <ProtectRoute redirectUrl={ROUTES.login}>
          <Suspense fallback={<LoadingSpinner />}>
            <ApplicantViewLayout>
              <MyProjectVolunteersPass />
            </ApplicantViewLayout>
          </Suspense>
        </ProtectRoute>
      ),
    },
  ];

  const newRouteList = routeList.map((item) => {
    return {
      ...item,
      errorElement: <NotFoundPage />,
    };
  });

  const router = createBrowserRouter(newRouteList);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
