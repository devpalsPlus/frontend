import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ChangePassword from '../pages/changePassword/ChangePassword';
import Layout from '../components/common/layout/Layout';
import Home from '../pages/home/Home';
import CreateProject from '../pages/createProject/CreateProject';
import Apply from '../pages/apply/Apply';
import ProjectDetail from '../pages/projectDetail/ProjectDetail';
import MyProjectList from '../pages/manage/myProjectList/MyProjectList';
import LayoutSidebar from '../components/common/layout/sidebar/LayoutSidebar';
import MyProfile from '../components/mypage/myProfile/myProfile';
import MyApplyProject from '../components/mypage/appliedProject/MyApplyProject';
import MyProjectVolunteer from '../pages/manage/myProjectVolunteer/MyProjectVolunteer';
import MyProjectVolunteersPass from '../pages/manage/myProjectParticipantsPass/MyProjectVolunteersPass';
import Error from '../pages/error/Error';
import { ROUTES } from '../constants/routes';
import useAuthStore from '../store/authStore';
import MyJoinProjects from '../components/mypage/joinedProject/MyJoinProjects';
import UserProfile from '../components/userPage/userProfile/UserProfile';
import UserJoinProject from '../components/userPage/joinedProject/UserJoinProject';
import MyPage from '../pages/mypage/MyPage';
import UserPage from '../pages/userpage/UserPage';

const AppRoutes = () => {
  const { isLoggedIn } = useAuthStore();

  const routeList = [
    {
      path: ROUTES.main,
      element: <Main />,
    },
    {
      path: ROUTES.login,
      element: isLoggedIn ? <Navigate to='/main' replace /> : <Login />,
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
        <Layout>
          <MyProjectList />
        </Layout>
      ),
    },
    {
      path: ROUTES.mypage,
      element: (
        <Layout>
          <MyPage />
        </Layout>
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
        <Layout>
          <UserPage />
        </Layout>
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
