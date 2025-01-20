import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from './MyPage.styled';
import {
  UserIcon,
  DocumentTextIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from '../../constants/routes';
import { useMyProfileInfo } from '../../hooks/useMyInfo';
import DefaultImg from '../../assets/defaultImg.png';

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
      label: '지원한 프로젝트 현황',
      path: `${ROUTES.mypage}/${ROUTES.mypageAppliedProjects}`,
      icon: <PencilSquareIcon />,
    },
  ];
  const { myData } = useMyProfileInfo();
  const profileImg = myData?.profileImg ? myData.profileImg : DefaultImg;

  return (
    <S.Container>
      <Sidebar
        menuItems={menuItems}
        nickname={myData?.nickname}
        profileImage={profileImg}
      />
      <S.Wrapper>
        <S.ScrollWrapper>
          <Outlet />
        </S.ScrollWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
