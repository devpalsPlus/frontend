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

const routeList = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/change-password',
    element: <ChangePassword />,
  },
  {
    path: '/main',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/create',
    element: (
      <Layout>
        <CreateProject />
      </Layout>
    ),
  },
  {
    path: '/apply/:projectId',
    element: (
      <Layout>
        <Apply />
      </Layout>
    ),
  },
  {
    path: '/project-detail/:projectId',
    element: (
      <Layout>
        <ProjectDetail />
      </Layout>
    ),
  },
  {
    path: '/manage',
    element: (
      <Layout>
        <MyProjectList />
      </Layout>
    ),
  },
  {
    path: '/mypage',
    element: (
      <Layout>
        <LayoutSidebar>
          <MyProfile />
        </LayoutSidebar>
      </Layout>
    ),
  },
  {
    path: '/users/:userId/entered',
    element: (
      <Layout>
        <LayoutSidebar>
          <MyEnteredProject />
        </LayoutSidebar>
      </Layout>
    ),
  },
  {
    path: '/users/:userId/apply',
    element: (
      <Layout>
        <LayoutSidebar>
          <MyApplyProject />
        </LayoutSidebar>
      </Layout>
    ),
  },
  {
    path: '/users/:userId/others',
    element: (
      <Layout>
        <LayoutSidebar>
          <OtherUserProfile />
        </LayoutSidebar>
      </Layout>
    ),
  },
  {
    path: '/users/:userId/others-project',
    element: (
      <Layout>
        <LayoutSidebar>
          <OtherUserProject />
        </LayoutSidebar>
      </Layout>
    ),
  },

  {
    path: '/manage/:projectId',
    element: (
      <Layout>
        <LayoutSidebar>
          <MyProjectVolunteer />
        </LayoutSidebar>
      </Layout>
    ),
  },
  {
    path: '/manage/:projectId/pass-nonpass',
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
