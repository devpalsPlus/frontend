import MainLogo from '../../../assets/mainlogo.svg';
import EditMyProfileImg from './editMyProfileImg/EditMyProfileImg';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import * as S from './Sidebar.styled';
import React, { useCallback } from 'react';
import useAuthStore from '../../../store/authStore';

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  isDone?: boolean;
}

interface SidebarProps {
  menuItems: MenuItem[];
  profileImage?: string | null | React.ReactNode;
  nickname?: string;
}

const Sidebar = ({ menuItems, profileImage, nickname }: SidebarProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const isUserPage = location.pathname.includes('/user');
  const isManagePage = location.pathname.includes('/manage');

  const isMyProfile = isLoggedIn && !isUserPage && !isManagePage;
  const getActiveIndex = useCallback(() => {
    const currentPath = location.pathname;
    return (
      menuItems.findIndex((item) => {
        return currentPath === item.path;
      }) ?? 0
    );
  }, [location.pathname, menuItems]);

  return (
    <S.Container $isAdmin={isAdmin}>
      <S.AvatarContainer>
        <S.AvatarWrapper>
          {profileImage === MainLogo ? (
            <S.LogoContainer>
              <img src={MainLogo} alt='main logo' loading='eager' />
            </S.LogoContainer>
          ) : (
            <Avatar size='120px' image={profileImage} />
          )}
          {isMyProfile && <EditMyProfileImg />}
        </S.AvatarWrapper>
        <span>{nickname ? nickname : ''}</span>
      </S.AvatarContainer>
      <S.MenuList>
        {menuItems.map(({ label, path, icon, isDone = false }, index) => {
          return (
            <Link key={index} to={path}>
              <S.MenuItem
                $isActive={getActiveIndex() === index}
                $isHidden={index === 2 && isDone}
                $isAdmin={isAdmin}
              >
                {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
                {icon && <S.Label>{label}</S.Label>}
              </S.MenuItem>
            </Link>
          );
        })}
      </S.MenuList>
    </S.Container>
  );
};

export default React.memo(Sidebar);
