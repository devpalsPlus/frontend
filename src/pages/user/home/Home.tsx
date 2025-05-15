import Banner from '../../../components/user/home/banner/Banner';
import ProjectCardLists from '../../../components/user/home/projectCardLists/ProjectCardLists';
import ProjectStats from '../../../components/user/home/projectStats/ProjectStats';
import SearchFiltering from '../../../components/user/home/searchFiltering/SearchFiltering';
import * as S from './Home.styled';
<<<<<<< HEAD
=======

>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)
const Home = () => {
  return (
    <S.Container>
      <Banner />
      <S.Wrapper>
        <ProjectStats />
        <SearchFiltering />
        <ProjectCardLists />
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
