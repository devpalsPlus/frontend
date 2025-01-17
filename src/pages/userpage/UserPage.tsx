import { Outlet, useParams } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from '../mypage/MyPage.styled';
import { DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

const UserPage = () => {
  const { userId } = useParams<{ userId: string }>();

  const menuItems = [
    {
      label: '프로필',
      path: `/user/${userId}`,
      icon: <UserIcon width='20px' height='20px' />,
    },
    {
      label: '참여한 프로젝트 현황',
      path: `/user/${userId}/join-projects`,
      icon: <DocumentTextIcon width='20px' height='20px' />,
    },
  ];
  return (
    <S.Container>
      <Sidebar menuItems={menuItems} nickname='백에서 받아오는 유저이름' />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default UserPage;
