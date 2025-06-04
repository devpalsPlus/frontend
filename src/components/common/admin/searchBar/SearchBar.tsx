import { XMarkIcon } from '@heroicons/react/24/outline';
import { MODAL_MESSAGE_CUSTOMER_SERVICE } from '../../../../constants/user/customerService';
import * as S from './SearchBar.styled';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useModal } from '../../../../hooks/useModal';
import Modal from '../../modal/Modal';
import { ADMIN_ROUTE } from '../../../../constants/routes';

interface SearchBarProps {
  onGetKeyword: (keyword: string) => void;
  value: string;
}

export default function SearchBar({ onGetKeyword, value }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const keyword = inputValue ? inputValue : value;

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

    if (inputValue.trim() === '') {
      return handleModalOpen(MODAL_MESSAGE_CUSTOMER_SERVICE.noKeyword);
    } else {
      onGetKeyword(inputValue);
      handleKeyword(inputValue);
      return;
    }
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClickSearchDefault = () => {
    setInputValue('');
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
      <S.WriteLink to={ADMIN_ROUTE.write} state={{ form: location.pathname }}>
        작성하기
      </S.WriteLink>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.AdminSearchBarContainer>
  );
}
