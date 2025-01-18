import { useProjectCardListData } from '../../../hooks/useProjectCardListData';
import CardList from './cardList/CardList';
import Pagination from './pagination/Pagination';
import * as S from './ProjectCardLists.styled';

export default function ProjectCardLists() {
  const { projectListsData, isError, isLoading } = useProjectCardListData();
  if (!projectListsData) return;

  return (
    <S.Container>
      <div className='title'>
        <h1>프로젝트 리스트</h1>
      </div>
      <S.Wrapper>
        {projectListsData?.projects.map((list) => (
          <CardList key={list.id} list={list} data-cardId={list.id} />
        ))}
      </S.Wrapper>
      <Pagination />
    </S.Container>
  );
}
