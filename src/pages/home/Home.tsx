import * as S from './Home.styled';
import Banner from '../../components/home/banner/Banner';
import ProjectStats from '../../components/home/projectStats/ProjectStats';
import SearchFiltering from '../../components/home/searchFiltering/SearchFiltering';

const Home = () => {
  /*
    모집공고 페이지
    */
  return (
    <S.Container>
      <S.Wrapper>
        <Banner />
        <S.WrapperContents>
          <ProjectStats />
          <SearchFiltering />
        </S.WrapperContents>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
