import React from 'react';
import * as S from './Header.styled';
import Mainlogo from '../../../assets/mainlogo.svg';
import User from '../../../assets/user.svg';
import { Link } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import Avatar from '../avatar/Avatar';

function Header() {
  return (
    <S.HeaderContainer>
      <Link to='/home'>
        <img src={Mainlogo} alt='logo' />
      </Link>
      <nav className='auth'>
        <DropDown toggleButton={<Avatar size='45px' image={User} />}>
          <>
            <ul>
              <li>
                <Link to='/mypage'>마이페이지</Link>
              </li>
              <li>
                <Link to='/manage'>모집하고 있는 프로젝트 </Link>
              </li>
              <li>
                <Link to='/home'>로그아웃</Link>
              </li>
            </ul>
          </>
        </DropDown>
      </nav>
    </S.HeaderContainer>
  );
}

export default Header;
