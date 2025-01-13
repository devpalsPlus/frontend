import * as S from './Home.styled';
import Banner from '../../components/home/banner/Banner';
import ProjectStats from '../../components/home/projectStats/ProjectStats';
import SearchFiltering from '../../components/home/searchFiltering/SearchFiltering';
import ProjectCardLists from '../../components/home/projectCardLists/ProjectCardLists';
import { SearchFilteringProvider } from '../../context/SearchFilteringContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Home = () => {
  /*
    모집공고 페이지
    */
  return (
    <SearchFilteringProvider>
      <S.Container>
        <Banner />
        <ProjectStats />
        <SearchFiltering />
        <ProjectCardLists />
      </S.Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </SearchFilteringProvider>
  );
};

export default Home;
