import { XMarkIcon } from '@heroicons/react/24/outline';
import * as S from './SearchBar.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useModal } from '../../../../hooks/useModal';
import { MODAL_MESSAGE_CUSTOMER_SERVICE } from '../../../../constants/user/customerService';
import Modal from '../../modal/Modal';
import { ADMIN_ROUTE } from '../../../../constants/routes';

interface SearchBarProps {
  onGetKeyword: (value: string) => void;
  value: string;
  canWrite?: boolean;
}

export default function SearchBar({
  onGetKeyword,
  value,
  canWrite = true,
}: SearchBarProps) {
  const [keyword, setKeyword] = useState<string>(value);
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyword = (inputValue: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (inputValue === '') {
      newSearchParams.delete('keyword');
    } else {
      newSearchParams.set('keyword', inputValue);
    }
    setSearchParams(newSearchParams);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword.trim() === '') {
      return handleModalOpen(MODAL_MESSAGE_CUSTOMER_SERVICE.noKeyword);
    } else {
      onGetKeyword(keyword);
      handleKeyword(keyword);
      return;
    }
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClickSearchDefault = () => {
    setKeyword('');
    onGetKeyword('');
    handleKeyword('');
  };

  return (
    <S.AdminSearchBarContainer onSubmit={handleSubmit}>
      <S.AdminSearchBarWrapper>
        <S.AdminSearchBarInputWrapper>
          <S.AdminSearchBarInput
            placeholder={MODAL_MESSAGE_CUSTOMER_SERVICE.noKeyword}
            value={keyword}
            onChange={handleChangeKeyword}
          />
          {keyword && (
            <S.AdminSearchBarBackIcon
              type='button'
              aria-label='show all result'
              onClick={handleClickSearchDefault}
            >
              <XMarkIcon />
            </S.AdminSearchBarBackIcon>
          )}
        </S.AdminSearchBarInputWrapper>
        <S.AdminSearchBarButton>검색</S.AdminSearchBarButton>
      </S.AdminSearchBarWrapper>
      {canWrite && (
        <S.WriteLink to={ADMIN_ROUTE.write} state={{ form: location.pathname }}>
          작성하기
        </S.WriteLink>
      )}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.AdminSearchBarContainer>
  );
}
