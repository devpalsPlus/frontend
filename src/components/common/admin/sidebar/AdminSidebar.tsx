import { SIDEBAR_LIST } from '../../../../constants/admin/sidebar';
import * as S from './AdminSidebar.styled';
import logo from '../../../../assets/mainlogo.svg';
import AdminSidebarList from './sidebarList/AdminSidebarList';
import ContentBorder from '../../contentBorder/ContentBorder';

export default function AdminSidebar() {
  return (
    <S.SidebarContainer>
      <S.SidebarLogoWrapper>
        <S.SidebarLogoImg src={logo} alt='logo' />
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
