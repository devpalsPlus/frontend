import * as S from './Header.styled';
import Mainlogo from '../../../assets/mainlogo.svg';
import User from '../../../assets/user.svg';
import { Link } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import Avatar from '../avatar/Avatar';
import { useAuth } from '../../../hooks/useAuth';
import useAuthStore from '../../../store/authStore';
import { ROUTES } from '../../../constants/routes';

function Header() {
  const { userLogout } = useAuth();
  const { isLoggedIn } = useAuthStore();
  return (
    <S.HeaderContainer>
      <Link to={ROUTES.home}>
        <img src={Mainlogo} alt='logo' />
      </Link>
      <nav className='auth'>
        <DropDown toggleButton={<Avatar size='45px' image={User} />}>
          <>
            {isLoggedIn && (
              <ul>
                <Link to={ROUTES.mypage}>
                  <li>마이 페이지</li>
                </Link>
                <Link to={ROUTES.manageProjectsRoot}>
                  <li>공고 관리</li>
                </Link>
                <Link to='#' onClick={(e) => e.preventDefault()}>
                  <li>
                    <button onClick={userLogout}>로그아웃</button>
                  </li>
                </Link>
              </ul>
            )}
            {!isLoggedIn && (
              <ul>
                <Link to={ROUTES.login}>
                  <li>로그인</li>
                </Link>
                <Link to={ROUTES.signup}>
                  <li>회원가입</li>
                </Link>
              </ul>
            )}
          </>
        </DropDown>
      </nav>
    </S.HeaderContainer>
  );
}

export default Header;
