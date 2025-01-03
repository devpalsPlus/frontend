import * as S from './Home.styled';
import Banner from '../../components/home/banner/Banner';
import ProjectStats from '../../components/home/projectStats/ProjectStats';

const Home = () => {
  /*
    모집공고 페이지
    */
  return (
    <S.Container>
      <S.Wrapper>
        <Banner />
        <ProjectStats />
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
