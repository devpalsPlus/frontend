import { NavLink } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import * as S from './Sidebar.styled';

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  menuItems: MenuItem[];
  profileImage?: string;
  nickname?: string;
}

const Sidebar = ({ menuItems, profileImage, nickname }: SidebarProps) => {
  return (
    <S.Container>
      <S.AvartarWrapper>
        <Avatar size='120px' image={profileImage} />
        <span>{nickname ? nickname : ''}</span>
      </S.AvartarWrapper>
      <S.MenuList>
        {menuItems.map(({ label, path, icon }) => (
          <NavLink key={path} to={path}>
            <S.MenuItem>
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
