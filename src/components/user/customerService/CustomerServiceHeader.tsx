import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import * as S from './CustomerServiceHeader.styled';
import MovedInquiredLink from './MoveInquiredLink';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

interface CustomerServiceHeaderProps {
  title: string;
  keyword: string;
  onGetKeyword: (value: string) => void;
}

export default function CustomerServiceHeader({
  title,
  keyword,
  onGetKeyword,
}: CustomerServiceHeaderProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGetKeyword(inputValue);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleReset = () => {
    onGetKeyword('');
    setInputValue('');
  };

  return (
    <S.Container>
      <S.WrapperTitle>
        <S.Title>DevPals {title}</S.Title>
      </S.WrapperTitle>
      <S.WrapperNav>
        <S.SearchBarForm onSubmit={handleSubmitKeyword}>
          <S.SearchBarInput
            type='text'
            placeholder='궁금한 내용을 검색해보세요.'
            value={inputValue || keyword}
            onChange={handleChangeValue}
          />
          <S.ButtonWrapper>
            {keyword !== '' && (
              <S.UturnButton
                type='button'
                aria-label='show all result'
                onClick={handleReset}
              >
                <XCircleIcon />
              </S.UturnButton>
            )}
            <S.SearchButton type='submit' aria-label='search'>
              <MagnifyingGlassIcon />
            </S.SearchButton>
          </S.ButtonWrapper>
        </S.SearchBarForm>
        <MovedInquiredLink />
      </S.WrapperNav>
      <Outlet />
    </S.Container>
  );
}
