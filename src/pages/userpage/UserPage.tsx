import { Outlet, useParams } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from '../mypage/MyPage.styled';
import { DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../../constants/routes';
import { useUserProfileInfo } from '../../hooks/useUserInfo';
import loadingImg from '../../assets/loadingImg.svg';

const UserPage = () => {
  const { userId } = useParams();

  const menuItems = [
    {
      label: '프로필',
      path: `${ROUTES.userpage}/${userId}`,
      icon: <UserIcon width='20px' height='20px' />,
    },
    {
      label: '참여한 프로젝트 현황',
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
        <S.ScrollWrapper>
          <Outlet />
        </S.ScrollWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default UserPage;
