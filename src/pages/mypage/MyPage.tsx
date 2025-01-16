import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from './MyPage.styled';
import {
  UserIcon,
  DocumentTextIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

const MyPage = () => {
  const menuItems = [
    {
      label: '프로필',
      path: '/mypage',
      icon: <UserIcon />,
    },
    {
      label: '참여한 프로젝트 현황',
      path: '/mypage/join-projects',
      icon: <DocumentTextIcon />,
    },
    {
      label: '지원한 프로젝트 현황',
      path: '/mypage/apply-projects',
      icon: <PencilSquareIcon />,
    },
  ];
  return (
    <S.Container>
      <Sidebar menuItems={menuItems} nickname='백엔드에서 받아오는 이름' />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
