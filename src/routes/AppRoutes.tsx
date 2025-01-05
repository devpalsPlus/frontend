import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/change-password" element={<ChangePassword />} />

      <Route path="/main" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateProject />} />
        <Route path="apply" element={<Apply />} />
        <Route path="project-detail" element={<ProjectDetail />} />
        <Route path="manage" element={<MyProjectList />} />
        <Route path="users/:user_id" element={<LayoutSidebar />}>
          <Route index element={<MyProfile />} />
          <Route path="entered" element={<MyEnteredProject />} />
          <Route path="apply" element={<MyApplyProject />} />
          <Route path="others" element={<OtherUserProfile />} />
          <Route path="others-project" element={<OtherUserProject />} />
        </Route>
        <Route path="manage/:project_id" element={<LayoutSidebar />}>
          <Route index element={<MyProjectVolunteer />} />
          <Route path="pass-nonpass" element={<MyProjectVolunteersPass />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
