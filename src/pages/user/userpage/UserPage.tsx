import { Outlet, useParams } from 'react-router-dom';
import * as S from '../mypage/MyPage.styled';
import { DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';
import loadingImg from '../../../assets/loadingImg.svg';
import { ROUTES } from '../../../constants/user/routes';
import { useUserProfileInfo } from '../../../hooks/user/useUserInfo';
import Sidebar from '../../../components/common/sidebar/Sidebar';

const UserPage = () => {
  const { userId } = useParams();

  const menuItems = [
    {
      label: '프로필',
      path: `${ROUTES.userpage}/${userId}`,
      icon: <UserIcon width='20px' height='20px' />,
    },
    {
      label: '참여 프로젝트',
      path: `${ROUTES.userpage}/${userId}/${ROUTES.userJoinedProject}`,
      icon: <DocumentTextIcon width='20px' height='20px' />,
    },
  ];

  const { userData, isLoading } = useUserProfileInfo(Number(userId));
  return (
    <S.Container>
      <Sidebar
        menuItems={menuItems}
        nickname={userData?.nickname}
        profileImage={isLoading ? loadingImg : userData?.profileImg}
      />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default UserPage;
