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
import { formatImgPath } from '../../../util/formatImgPath';
import bell from '../../../assets/bell.svg';
import Notification from './Notification/Notification';
import useNotification from '../../../hooks/useNotification';
import bellLogined from '../../../assets/bell.svg';

function Header() {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { userLogout } = useAuth(handleModalOpen);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { myData, isLoading } = useMyProfileInfo();
  const { isSignal } = useNotification();

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  return (
    <S.HeaderContainer>
      <Link to={ROUTES.main}>
        <S.LogoImg src={Mainlogo} alt='logo' />
      </Link>
      <S.Wrapper>
        <S.HeaderLinkContainer>
          <Link to={ROUTES.FAQ}>
            <S.HeaderLink>FAQ</S.HeaderLink>
          </Link>
          <Link to={ROUTES.notice}>
            <S.HeaderLink>공지사항</S.HeaderLink>
          </Link>
        </S.HeaderLinkContainer>
        <S.Alarm>
          {isLoggedIn ? (
            <DropDown toggleButton={<img src={bellLogined} />}>
              <Notification />
              {isSignal && '가능'}
            </DropDown>
          ) : (
            <img src={bell} />
          )}
        </S.Alarm>
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
              <S.List>
                <Link to={ROUTES.mypage}>
                  <S.Item>마이페이지</S.Item>
                </Link>
                <Link to={ROUTES.manageProjectsRoot}>
                  <S.Item>공고관리</S.Item>
                </Link>
                <Link to={ROUTES.support}>
                  <S.Item>문의하기</S.Item>
                </Link>
                <Link to='#' onClick={(e) => e.preventDefault()}>
                  <S.Item onClick={userLogout}>로그아웃</S.Item>
                </Link>
              </S.List>
            )}
            {!isLoggedIn && (
              <S.List>
                <Link to={ROUTES.login}>
                  <S.Item>로그인</S.Item>
                </Link>
                <Link to={ROUTES.signup}>
                  <S.Item>회원가입</S.Item>
                </Link>
              </S.List>
            )}
          </>
        </DropDown>
      </S.Wrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.HeaderContainer>
  );
}

export default Header;
