import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Suspense } from 'react';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ChangePassword from '../pages/changePassword/ChangePassword';
import Main from '../pages/main/Main';
import Layout from '../components/common/layout/Layout';
import Home from '../pages/home/Home';
import CreateProject from '../pages/createProject/CreateProject';
import Apply from '../pages/apply/Apply';
import ProjectDetail from '../pages/projectDetail/ProjectDetail';
import MyProjectList from '../pages/manage/myProjectList/MyProjectList';

import LayoutSidebar from '../components/common/layout/sidebar/LayoutSidebar';
import MyProfile from '../pages/users/myProfile/MyProfile';
import MyEnteredProject from '../pages/users/myEnteredProject/MyEnteredProject';
import MyApplyProject from '../pages/users/myApplyProject/MyApplyProject';
import OtherUserProfile from '../pages/users/otherUserProfile/OtherUserProfile';
import OtherUserProject from '../pages/users/otherUserProject/OtherUserProject';
import MyProjectVolunteer from '../pages/manage/myProjectVolunteer/MyProjectVolunteer';
import MyProjectVolunteersPass from '../pages/manage/myProjectParticipantsPass/MyProjectVolunteersPass';
import Error from '../pages/error/Error';
import { ROUTES } from '../constants/routes';
import useAuthStore from '../store/authStore';
import LoadingSpinner from '../components/common/loadingSpinner/LoadingSpinner';
import ProtectRoute from '../components/common/ProtectRoute';

const AppRoutes = () => {
  const { isLoggedIn } = useAuthStore();

  const routeList = [
    {
      path: ROUTES.main,
      element: <Main />,
    },
    {
      path: ROUTES.login,
      element: <Login />,
    },
    {
      path: ROUTES.signup,
      element: isLoggedIn ? <Navigate to='/main' replace /> : <Register />,
    },
    {
      path: ROUTES.changePw,
      element: <ChangePassword />,
    },
    {
      path: ROUTES.home,
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: ROUTES.createProject,
      element: (
        <Layout>
          <CreateProject />
        </Layout>
      ),
    },
    {
      path: `${ROUTES.apply}/:projectId`,
      element: (
        <Layout>
          <Apply />
        </Layout>
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
        <Layout>
          <LayoutSidebar>
            <MyProfile />
          </LayoutSidebar>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.userInfoProject}/:userId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <MyEnteredProject />
          </LayoutSidebar>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.userInfoApply}/:userId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <MyApplyProject />
          </LayoutSidebar>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.userInfoOthers}/:userId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <OtherUserProfile />
          </LayoutSidebar>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.userInfoOthersProject}/:userId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <OtherUserProject />
          </LayoutSidebar>
        </Layout>
      ),
    },

    {
      path: `${ROUTES.manageProjectsRoot}/:projectId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <MyProjectVolunteer />
          </LayoutSidebar>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.manageProjectsPassNonPass}/:projectId`,
      element: (
        <Layout>
          <LayoutSidebar>
            <MyProjectVolunteersPass />
          </LayoutSidebar>
        </Layout>
      ),
    },
  ];

  const newRouteList = routeList.map((item) => {
    return {
      ...item,
      errorElement: <Error />,
    };
  });

  const router = createBrowserRouter(newRouteList);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
