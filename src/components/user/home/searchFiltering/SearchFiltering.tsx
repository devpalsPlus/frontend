import FilteringContents from './filteringContents/FilteringContents';
import Search from './search/Search';
import * as S from './SearchFiltering.styled';

export default function SearchFiltering() {
  return (
    <S.Container>
      <S.Wrapper>
        <FilteringContents />
        <Search />
      </S.Wrapper>
    </S.Container>
  );
}
