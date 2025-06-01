import { XMarkIcon } from '@heroicons/react/24/outline';
import { MODAL_MESSAGE_CUSTOMER_SERVICE } from '../../../constants/user/customerService';
import * as S from './SearchBar.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../common/modal/Modal';

interface SearchBarProps {
  onGetKeyword: (value: string) => void;
  value: string;
}

export default function SearchBar({ onGetKeyword, value }: SearchBarProps) {
  const [keyword, setKeyword] = useState<string>('');
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
    const value = e.target.value;
    setKeyword(value);
  };

  const handleClickSearchDefault = () => {
    setKeyword('');
    onGetKeyword('');
    handleKeyword('');
  };

  return (
    <S.AdminSearchBarContainer onSubmit={handleSubmit}>
      <S.AdminSearchBarWrapper>
        <S.AdminSearchBarInput
          placeholder={MODAL_MESSAGE_CUSTOMER_SERVICE.noKeyword}
          value={keyword ? keyword : value}
          onChange={handleChangeKeyword}
        />
        {value && (
          <S.AdminSearchBarBackIcon
            type='button'
            onClick={handleClickSearchDefault}
          >
            <XMarkIcon />
          </S.AdminSearchBarBackIcon>
        )}
      </S.AdminSearchBarWrapper>
      <S.AdminSearchBarButton>검색</S.AdminSearchBarButton>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.AdminSearchBarContainer>
  );
}
