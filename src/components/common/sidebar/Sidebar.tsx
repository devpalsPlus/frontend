import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import * as S from './Sidebar.styled';
import { useState } from 'react';

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  menuItems: MenuItem[];
  profileImage?: string | null;
  nickname?: string;
}

const Sidebar = ({ menuItems, profileImage, nickname }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <S.Container>
      <S.AvartarWrapper>
        <Avatar size='120px' image={profileImage} />
        <span>{nickname ? nickname : ''}</span>
      </S.AvartarWrapper>
      <S.MenuList>
        {menuItems.map(({ label, path, icon }, index) => (
          <NavLink key={path} to={path}>
            <S.MenuItem
              $isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            >
              {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
              {label}
            </S.MenuItem>
          </NavLink>
        ))}
      </S.MenuList>
    </S.Container>
  );
};

export default Sidebar;
