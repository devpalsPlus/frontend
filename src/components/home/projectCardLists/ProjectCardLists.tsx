import { useProjectCardListData } from '../../../hooks/useProjectCardListData';
import CardList from './cardList/CardList';
import * as S from './ProjectCardLists.styled';

export default function ProjectCardLists() {
  const { projectListsData, isError, isLoading } = useProjectCardListData();

  return (
    <S.Container>
      <div className='title'>
        <h1>프로젝트 리스트</h1>
      </div>
      <S.Wrapper>
        {projectListsData?.projects.map((list) => (
          <CardList key={list.id} list={list} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
