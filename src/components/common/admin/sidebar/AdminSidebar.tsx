import { SIDEBAR_LIST } from '../../../../constants/admin/sidebar';
import * as S from './AdminSidebar.styled';
import logo from '../../../../assets/mainlogo.svg';
import logoutIcon from '../../../../assets/logout.svg';
import AdminSidebarList from './sidebarList/AdminSidebarList';
import ContentBorder from '../../contentBorder/ContentBorder';
import useAuthStore from '../../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleClickLogout = () => {
    logout();
    setTimeout(() => {
      navigate(ROUTES.main);
    }, 1000);
  };

  return (
    <S.SidebarContainer>
      <S.SidebarLogoWrapper>
        <S.SidebarLogoImg src={logo} alt='logo' />
        <S.LogoutButton
          type='button'
          onClick={handleClickLogout}
          aria-label='관리자 로그아웃'
          title='로그아웃'
        >
          <S.LogoutImg src={logoutIcon} alt='logout icon' />
          <S.LogoutSpan>Logout</S.LogoutSpan>
        </S.LogoutButton>
      </S.SidebarLogoWrapper>
      <ContentBorder />
      <S.MovedListContainerAll>
        <AdminSidebarList title='' list={SIDEBAR_LIST.main} />
        <AdminSidebarList title='서비스 관리' list={SIDEBAR_LIST.service} />
        <AdminSidebarList title='사용자 관리' list={SIDEBAR_LIST.user} />
      </S.MovedListContainerAll>
    </S.SidebarContainer>
  );
}
