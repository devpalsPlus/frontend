import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import MyProfile from '../pages/users/myProfile/MyProfile';
import MyEnteredProject from '../pages/users/myEnteredProject/MyEnteredProject';
import MyApplyProject from '../pages/users/myApplyProject/MyApplyProject';
import OtherUserProfile from '../pages/users/otherUserProfile/OtherUserProfile';
import OtherUserProject from '../pages/users/otherUserProject/OtherUserProject';
import MyProjectVolunteer from '../pages/manage/myProjectVolunteer/MyProjectVolunteer';
import MyProjectVolunteersPass from '../pages/manage/myProjectParticipantsPass/MyProjectVolunteersPass';
import Error from '../pages/error/Error';
import { ROUTES } from '../constants/routes';

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
    element: <Register />,
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

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
