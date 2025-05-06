import * as S from './MyProfile.styled';
import Spinner from '../Spinner';
import { useMyProfileInfo } from '../../../hooks/useMyInfo';
import NoMyInfo from './NoMyInfo';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

const MyProfile = () => {
  const { myData, isLoading } = useMyProfileInfo();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879' />;
  }

  if (!myData) {
    return <NoMyInfo />;
  }

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterTitle>프로필</S.FilterTitle>
        {!location.pathname.includes(ROUTES.mypageEdit) && (
          <S.EditLink to={ROUTES.mypageEdit}>
            <PencilIcon />
          </S.EditLink>
        )}
      </S.FilterWrapper>
      <S.ScrollWrapper ref={scrollRef}>
        <S.SectionContainer>
          <Outlet context={{ myData, scrollRef, handleModalOpen }} />
        </S.SectionContainer>
      </S.ScrollWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default MyProfile;
