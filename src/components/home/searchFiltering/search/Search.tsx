import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as S from './Search.styled';

export default function Search() {
  return (
    <S.Container>
      <S.Wrapper>
        <label htmlFor="">
          <input
            type="text"
            className="search"
            placeholder="제목, 글 내용 검색"
          />
          <button className="searchIcon">
            <MagnifyingGlassIcon className="searchIcon" />
          </button>
        </label>
      </S.Wrapper>
    </S.Container>
  );
}
