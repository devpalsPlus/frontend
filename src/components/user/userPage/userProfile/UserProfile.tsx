import * as S from '../../../user/mypage/myProfile/MyProfile.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useUserProfileInfo } from '../../../../hooks/user/useUserInfo';
import { useModal } from '../../../../hooks/useModal';
import { useRef } from 'react';
import NoMyInfo from '../../mypage/myProfile/NoMyInfo';
import Spinner from '../../mypage/Spinner';
import ScrollWrapper from '../../mypage/ScrollWrapper';
import Modal from '../../../common/modal/Modal';

const UserProfile = () => {
  const { userId } = useParams();
  const { userData, isLoading } = useUserProfileInfo(Number(userId));
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879' />;
  }

  if (!userData) {
    return <NoMyInfo />;
  }

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterTitle>유저정보</S.FilterTitle>
      </S.FilterWrapper>
      <ScrollWrapper $height='0%' scrollRef={scrollRef}>
        <S.SectionContainer>
          <Outlet
            context={{ userInfoData: userData, scrollRef, handleModalOpen }}
          />
        </S.SectionContainer>
      </ScrollWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default UserProfile;
