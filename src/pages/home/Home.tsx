import * as S from './Home.styled';
import Banner from '../../components/home/banner/Banner';
import ProjectStats from '../../components/home/projectStats/ProjectStats';
import SearchFiltering from '../../components/home/searchFiltering/SearchFiltering';
import ProjectCardLists from '../../components/home/projectCardLists/ProjectCardLists';
import { SearchFilteringProvider } from '../../context/SearchFilteringContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Home = () => {
  return (
    <S.Container>
      <Banner />
      <ProjectStats />
      <SearchFilteringProvider>
        <SearchFiltering />
        <ProjectCardLists />
        <ReactQueryDevtools initialIsOpen={false} />
      </SearchFilteringProvider>
    </S.Container>
  );
};

export default Home;
