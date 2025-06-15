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

type TabKey = 'basic' | 'log' | 'inquiry' | 'joined' | 'created' | 'applied';

const AdminUserDetail = () => {
  const { userId } = useParams();
  const { userData, isLoading, isFetching } = useGetUserInfo(Number(userId));

  if (isLoading || isFetching) {
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
      key: 'basic',
      label: '기본 정보',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.basic}`,
      icon: <InformationCircleIcon width='17px' height='17px' />,
    },
    {
      key: 'log',
      label: '활동 알림',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.log}`,
      icon: <ClipboardDocumentListIcon width='17px' height='17px' />,
    },
    {
      key: 'joined',
      label: '참여 프로젝트',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.joinedProject}`,
      icon: <UserGroupIcon width='17px' height='17px' />,
    },
    {
      key: 'created',
      label: '기획 프로젝트',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.createdProject}`,
      icon: <UserGroupIcon width='17px' height='17px' />,
    },
    {
      key: 'applied',
      label: '지원한 프로젝트',
      path: `/admin/users/${userId}/${ADMIN_ROUTE.appliedProject}`,
      icon: <ClipboardDocumentListIcon width='17px' height='17px' />,
    },
  ];

  return (
    <ScrollPreventor>
      <S.Container>
        <AdminTitle title='회원 상세' />

        <S.Wrapper>
          <S.MainContent>
            <S.ContentHeader>
              <S.BackToList to={`/admin/${ADMIN_ROUTE.users}`}>
                목록으로 이동
              </S.BackToList>
            </S.ContentHeader>
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
