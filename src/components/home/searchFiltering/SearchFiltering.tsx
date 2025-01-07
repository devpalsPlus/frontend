import { SearchFilteringProvider } from '../../../context/SearchFilteringContext';
import SkillTagBox from '../../common/skillTagBox/SkillTagBox';
import FilteringContents from './filteringContents/FilteringContents';
import Search from './search/Search';
import * as S from './SearchFiltering.styled';

export default function SearchFiltering() {
  return (
    <S.Container>
      <S.Wrapper>
        <SearchFilteringProvider>
          <FilteringContents />
          <SkillTagBox />
          <Search />
        </SearchFilteringProvider>
      </S.Wrapper>
    </S.Container>
  );
}
