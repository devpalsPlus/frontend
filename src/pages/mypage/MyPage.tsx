import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from './MyPage.styled';
import {
  UserIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from '../../constants/routes';
import { useMyProfileInfo } from '../../hooks/useMyInfo';
import loadingImg from '../../assets/loadingImg.svg';

const MyPage = () => {
  const menuItems = [
    {
      label: '프로필',
      path: ROUTES.mypage,
      icon: <UserIcon />,
    },
    {
      label: '참여한 프로젝트 현황',
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
    {
      label: '지원한 프로젝트 현황',
      path: `${ROUTES.mypage}/${ROUTES.mypageAppliedProjects}`,
      icon: <BellIcon />,
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
        {/* <S.FilterWrapper $justifyContent={$justifyContent}>
              {filter.map((filter) => (
                <S.FilterTitle>{filter}</S.FilterTitle>
              ))}
            </S.FilterWrapper> */}
        {/* <S.ScrollWrapper> */}
        <Outlet />
        {/* </S.ScrollWrapper> */}
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
