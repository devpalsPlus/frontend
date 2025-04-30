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
import bellLogined from '../../../assets/bellLogined.svg';
import useNotification from '../../../hooks/useNotification';
import { useEffect } from 'react';
import { testLiveAlarm } from '../../../api/alarm.api';

function Header() {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { userLogout } = useAuth(handleModalOpen);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { myData, isLoading } = useMyProfileInfo();
  const { signalData, setSignalData } = useNotification();

  useEffect(() => {
    testLiveAlarm();
  }, []);

  const profileImg = myData?.profileImg
    ? `${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
        myData.profileImg
      )}?w=86&h=86&fit=crop&crop=entropy&auto=format,enhance&q=60`
    : DefaultImg;

  return (
    <S.HeaderContainer>
      <Link to={ROUTES.main}>
        <S.LogoImg src={Mainlogo} alt='logo' aria-label='메인로고' />
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
        <S.Alarm role='button' tabIndex={0} aria-label='알림 메세지'>
          {isLoggedIn ? (
            <DropDown
              toggleButton={
                signalData ? (
                  <S.BellButton onClick={() => setSignalData(null)}>
                    <img src={bellLogined} alt='알림' />
                    {signalData && <S.Dot />}
                  </S.BellButton>
                ) : (
                  <img src={bellLogined} alt='알림' />
                )
              }
            >
              <Notification />
            </DropDown>
          ) : (
            <img src={bell} alt='알림' />
          )}
        </S.Alarm>
        <DropDown
          aria-label='프로필 드롭다운'
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
                <Link to={ROUTES.inquiry}>
                  <S.Item>문의하기</S.Item>
                </Link>
                <Link to='#' onClick={(e) => e.preventDefault()}>
                  <S.Item
                    aria-label='클릭시 로그아웃 됩니다.'
                    onClick={userLogout}
                  >
                    로그아웃
                  </S.Item>
                </Link>
              </S.List>
            )}
            {!isLoggedIn && (
              <S.List>
                <Link to={ROUTES.login}>
                  <S.Item aria-label='클릭시 로그인 화면으로 이동합니다.'>
                    로그인
                  </S.Item>
                </Link>
                <Link to={ROUTES.signup}>
                  <S.Item aria-label='클릭시 회원가입 화면으로 이동합니다.'>
                    회원가입
                  </S.Item>
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
