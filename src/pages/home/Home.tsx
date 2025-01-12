import * as S from './Home.styled';
import Banner from '../../components/home/banner/Banner';
import ProjectStats from '../../components/home/projectStats/ProjectStats';
import SearchFiltering from '../../components/home/searchFiltering/SearchFiltering';
import ProjectCardLists from '../../components/home/projectCardLists/ProjectCardLists';
import { SearchFilteringProvider } from '../../context/SearchFilteringContext';

const Home = () => {
  /*
    모집공고 페이지
    */
  return (
    <S.Container>
      <Banner />
      <S.Wrapper>
        <ProjectStats />
        <SearchFilteringProvider>
          <SearchFiltering />
          <ProjectCardLists />
        </SearchFilteringProvider>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
