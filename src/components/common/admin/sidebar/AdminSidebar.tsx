import { SIDEBAR_LIST } from '../../../../constants/admin/sidebar';
import * as S from './AdminSidebar.styled';
import logo from '../../../../assets/mainlogo.svg';
import logoutIcon from '../../../../assets/logout.svg';
import AdminSidebarList from './sidebarList/AdminSidebarList';
import ContentBorder from '../../contentBorder/ContentBorder';
import useAuthStore from '../../../../store/authStore';

export default function AdminSidebar() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <S.SidebarContainer>
      <S.SidebarLogoWrapper>
        <S.SidebarLogoImg src={logo} alt='logo' />
        <S.LogoutButton type='button' onClick={logout}>
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
