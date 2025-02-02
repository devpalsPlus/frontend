import * as S from './Header.styled';
import Mainlogo from '../../../assets/mainlogo.svg';
import { Link } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import Avatar from '../avatar/Avatar';
import { useAuth } from '../../../hooks/useAuth';
import useAuthStore from '../../../store/authStore';
import { ROUTES } from '../../../constants/routes';
import { useMyProfileInfo } from '../../../hooks/useMyInfo';
import DefaultImg from '../../../assets/defaultImg.png';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import loadingImg from '../../../assets/loadingImg.svg';
import { useModal } from '../../../hooks/useModal';
import Modal from '../modal/Modal';

function Header() {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { userLogout } = useAuth(handleModalOpen);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { myData, isLoading } = useMyProfileInfo();

  const profileImg = myData?.profileImg || DefaultImg;

  return (
    <S.HeaderContainer>
      <Link to={ROUTES.main}>
        <img src={Mainlogo} alt='logo' />
      </Link>
      <nav className='auth'>
        <DropDown
          toggleButton={
            isLoading ? (
              <Avatar size='45px' image={loadingImg} />
            ) : isLoggedIn ? (
              <Avatar size='45px' image={profileImg} />
            ) : (
              <UserCircleIcon color='#6D6D6D' width='48' height='48' />
            )
          }
        >
          <>
            {isLoggedIn && (
              <ul>
                <Link to={ROUTES.mypage}>
                  <li>마이페이지</li>
                </Link>
                <Link to={ROUTES.manageProjectsRoot}>
                  <li>공고관리</li>
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
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.HeaderContainer>
  );
}

export default Header;
