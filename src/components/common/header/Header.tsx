import * as S from './Header.styled';
import Mainlogo from '../../../assets/mainlogo.svg';
import User from '../../../assets/user.svg';
import { Link } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import Avatar from '../avatar/Avatar';
import { useAuth } from '../../../hooks/useAuth';
import useAuthStore from '../../../store/authStore';

function Header() {
  const { userLogout } = useAuth();
  const { isLoggedIn } = useAuthStore();
  return (
    <S.HeaderContainer>
      <Link to='/main'>
        <img src={Mainlogo} alt='logo' />
      </Link>
      <nav className='auth'>
        <DropDown toggleButton={<Avatar size='45px' image={User} />}>
          <>
            {isLoggedIn && (
              <ul>
                <li>
                  <Link to='/mypage'>마이페이지</Link>
                </li>
                <li>
                  <Link to='/manage'>모집하고 있는 프로젝트 </Link>
                </li>
                <li>
                  <button onClick={userLogout}>로그아웃</button>
                </li>
              </ul>
            )}
            {!isLoggedIn && (
              <ul>
                <li>
                  <Link to='/login'>로그인</Link>
                </li>
                <li>
                  <Link to='/signup'>회원가입</Link>
                </li>
              </ul>
            )}
          </>
        </DropDown>
      </nav>
    </S.HeaderContainer>
  );
}

export default Header;
