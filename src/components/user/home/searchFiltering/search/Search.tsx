import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import * as S from './Search.styled';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import React, { useState } from 'react';

export default function Search() {
  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const [searchText, setSearchText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchText(val);
  };
  const handleSubmitSearch = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateFilters('keyword', searchText);
  };
  const handleSearchResetClick = () => {
    handleUpdateFilters('keyword', '');
    setSearchText('');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchForm onSubmit={handleSubmitSearch}>
          <S.SearchInput
            type='text'
            placeholder='제목, 글 내용 검색'
            value={searchText}
            onChange={handleTextChange}
          />
          <S.ButtonWrapper>
            {searchFilters.keyword && (
              <S.SearchButton onClick={handleSearchResetClick}>
                <XCircleIcon />
              </S.SearchButton>
            )}
            <S.SearchButton>
              <MagnifyingGlassIcon />
            </S.SearchButton>
          </S.ButtonWrapper>
        </S.SearchForm>
      </S.Wrapper>
    </S.Container>
  );
}
