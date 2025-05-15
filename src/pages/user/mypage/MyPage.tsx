import { Outlet } from 'react-router-dom';
import * as S from './MyPage.styled';
import {
  UserIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import loadingImg from '../../../assets/loadingImg.svg';
import { ROUTES } from '../../../constants/user/routes';
import { useMyProfileInfo } from '../../../hooks/user/useMyInfo';
import Sidebar from '../../../components/common/sidebar/Sidebar';

const MyPage = () => {
  const menuItems = [
    {
      label: '프로필',
      path: ROUTES.mypage,
      icon: <UserIcon />,
    },
    {
      label: '참여 프로젝트',
      path: `${ROUTES.mypage}/${ROUTES.mypageJoinedProjects}`,
      icon: <DocumentTextIcon />,
    },
    {
      label: '알림',
      path: `${ROUTES.mypage}/${ROUTES.myPageNotifications}`,
      icon: <BellIcon />,
    },
    {
      label: '활동기록',
      path: `${ROUTES.mypage}/${ROUTES.myPageActivityLog}`,
      icon: <PencilSquareIcon />,
    },
  ];
  const { myData, isLoading } = useMyProfileInfo();

  return (
    <S.Container>
      <Sidebar
        menuItems={menuItems}
        nickname={myData?.nickname}
        profileImage={isLoading ? loadingImg : myData?.profileImg}
      />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
