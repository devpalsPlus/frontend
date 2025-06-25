import React from 'react';
import * as S from './AdminUserDetail.styled';
import {
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { ADMIN_ROUTE } from '../../../constants/routes';
import { Outlet, useParams } from 'react-router-dom';
import AdminTitle from '../../common/admin/title/AdminTitle';
import useGetUserInfo from '../../../hooks/admin/useGetUserInfo';
import Spinner from '../../user/mypage/Spinner';
import Sidebar from '../../common/sidebar/Sidebar';
import ScrollPreventor from '../../common/modal/ScrollPreventor';
import useGetUserProjectData from '../../../hooks/admin/useGetUserProjectData';
import { TabKey } from '../../../models/admin/userDetail/routing';

const AdminUserDetail = () => {
  const { userId } = useParams();
  const { userData, isLoading, isFetching } = useGetUserInfo(Number(userId));
  const {
    userData: projectData,
    isLoading: projectLoading,
    isFetching: projectFetching,
  } = useGetUserProjectData(Number(userId));

  if (isLoading || isFetching || projectLoading || projectFetching) {
    return (
      <S.Spinner>
        <Spinner />
      </S.Spinner>
    );
  }

  const tabs: {
    key: TabKey;
    path: string;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: 'profile',
      label: '기본 정보',
      path: `/admin/users/${userId}`,
      icon: <InformationCircleIcon width='17px' height='17px' />,
    },
    {
      key: 'log',
      label: '활동 알림',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.log}`,
      icon: <ClipboardDocumentListIcon width='17px' height='17px' />,
    },
    {
      key: 'projects',
      label: '지원/참여/기획한 프로젝트',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.projects}`,
      icon: <UserGroupIcon width='17px' height='17px' />,
    },
  ];

  return (
    <ScrollPreventor>
      <S.Container>
        <S.HeaderArea>
          <AdminTitle title='회원 상세' />
          <S.ContentHeader radius='primary' schema='primary' size='primary'>
            <S.BackToList to={`/admin/${ADMIN_ROUTE.users}`}>
              목록으로 이동
            </S.BackToList>
          </S.ContentHeader>
        </S.HeaderArea>
        <S.Wrapper>
          <S.MainContent>
            <S.Content>
              <Sidebar
                menuItems={tabs}
                nickname={userData?.nickname}
                profileImage={userData?.profileImg}
              />
              <S.DetailContent>
                <Outlet
                  context={{
                    userInfoData: userData,
                    projectData,
                  }}
                />
              </S.DetailContent>
            </S.Content>
          </S.MainContent>
        </S.Wrapper>
      </S.Container>
    </ScrollPreventor>
  );
};

export default AdminUserDetail;
