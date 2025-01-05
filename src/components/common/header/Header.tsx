import React from 'react';
import * as S from './Header.styled';
import Mainlogo from '../../../assets/mainlogo.svg';
import Avatar from '../avatar/Avatar';
import User from '../../../assets/user.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderContainer>
      <Link to="/home">
        <img src={Mainlogo} alt="logo" />
      </Link>
      <Avatar size="45px" image={User} />
    </S.HeaderContainer>
  );
}

export default Header;
