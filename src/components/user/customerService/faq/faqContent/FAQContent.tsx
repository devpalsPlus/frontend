import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import type { FAQ } from '../../../../../models/customerService';
import * as S from './FAQContent.styled';
import { useState } from 'react';
import { ADMIN_ROUTE } from '../../../../../constants/routes';
import DropDown from '../../../../common/dropDown/DropDown';
import { useAdminFAQ } from '../../../../../hooks/admin/useAdminFAQ';
import { useLocation } from 'react-router-dom';
import { useModal } from '../../../../../hooks/useModal';
import Modal from '../../../../common/modal/Modal';

interface FAQContentProps {
  list: FAQ;
  isAdmin: boolean;
}

export default function FAQContent({ list, isAdmin }: FAQContentProps) {
  const [isFAQContentOpen, setIsFAQContentOpen] = useState<boolean>(false);
  const location = useLocation();
  const id = String(list.id) || '';
  const pathname = location.pathname;
  const { isOpen, message, handleConfirm, handleModalOpen, handleModalClose } =
    useModal();
  const { deleteFAQMutate } = useAdminFAQ({
    handleModalOpen,
    pathname,
    handleConfirm,
  });

  const handleClickDeleteFAQ = () => {
    deleteFAQMutate.mutate(id);
  };

  return (
    <S.ListContainer>
      <S.ListWrapper
        type='button'
        onClick={() => setIsFAQContentOpen((prev) => !prev)}
      >
        <S.ListTitle>{list.title}</S.ListTitle>
        <S.ListPlusIcon $isOpen={isFAQContentOpen}>
          <PlusIcon />
        </S.ListPlusIcon>
      </S.ListWrapper>
      <S.ListContentWrapper $isShowContent={isFAQContentOpen}>
        <S.ListButtonWrapper>
          <ChevronRightIcon />
        </S.ListButtonWrapper>
        <S.ListContent>{list.content}</S.ListContent>
        {isAdmin && (
          <S.AdminFAQDropdownWrapper dataset-id={list.id}>
            <DropDown
              toggleButton={
                <S.AdminFAQAuthButton>
                  <EllipsisVerticalIcon />
                </S.AdminFAQAuthButton>
              }
            >
              <S.AdminFAQLinkWrapper>
                <S.AdminFAQLink
                  to={`${ADMIN_ROUTE.modification}/${list.id}`}
                  state={{ from: location.pathname, id: list.id }}
                >
                  수정
                </S.AdminFAQLink>
                <S.AdminFAQLink to='#' onClick={handleClickDeleteFAQ}>
                  삭제
                </S.AdminFAQLink>
              </S.AdminFAQLinkWrapper>
            </DropDown>
          </S.AdminFAQDropdownWrapper>
        )}
      </S.ListContentWrapper>
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </S.ListContainer>
  );
}
