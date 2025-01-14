import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as S from './Search.styled';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import React, { useState } from 'react';

export default function Search() {
  const { handleUpdateFilters } = useSaveSearchFiltering();
  const [searchText, setSearchText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchText(val);
  };
  const handleSubmitSearch = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    handleUpdateFilters('keyword', searchText);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <form onSubmit={handleSubmitSearch}>
          <input
            type='text'
            className='search'
            placeholder='제목, 글 내용 검색'
            value={searchText}
            onChange={handleTextChange}
          />
          <button className='searchIcon'>
            <MagnifyingGlassIcon className='searchIcon' />
          </button>
        </form>
      </S.Wrapper>
    </S.Container>
  );
}
