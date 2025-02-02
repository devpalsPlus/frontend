import { NavLink, useLocation } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import * as S from './Sidebar.styled';
import React, { useCallback } from 'react';
import EditMyProfileImg from './editMyProfileImg/EditMyProfileImg';
import useAuthStore from '../../../store/authStore';

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  menuItems: MenuItem[];
  profileImage?: string | null | React.ReactNode;
  nickname?: string;
}

const Sidebar = ({ menuItems, profileImage, nickname }: SidebarProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const location = useLocation();
  const isUserPage = location.pathname.includes('/user');
  const isManagePage = location.pathname.includes('/manage');

  const isMyProfile = isLoggedIn && !isUserPage && !isManagePage;

  const getActiveIndex = useCallback(() => {
    const currentPath = location.pathname;
    return menuItems.findIndex((item) => currentPath === item.path) ?? 0;
  }, [location.pathname, menuItems]);

  return (
    <S.Container>
      <S.AvartarContainer>
        <S.AvartarWrapper>
          <Avatar size='120px' image={profileImage} />
          {isMyProfile && <EditMyProfileImg />}
        </S.AvartarWrapper>
        <span>{nickname ? nickname : ''}</span>
      </S.AvartarContainer>
      <S.MenuList>
        {menuItems.map(({ label, path, icon }, index) => (
          <NavLink key={path} to={path}>
            <S.MenuItem $isActive={getActiveIndex() === index}>
              {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
              {label}
            </S.MenuItem>
          </NavLink>
        ))}
      </S.MenuList>
    </S.Container>
  );
};

export default React.memo(Sidebar);
