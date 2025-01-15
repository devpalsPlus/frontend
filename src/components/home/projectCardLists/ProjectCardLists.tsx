import { useProjectCardListData } from '../../../hooks/useProjectCardListData';
import { useSaveSearchFiltering } from '../../../hooks/useSaveSearchFiltering';
import CardList from './cardList/CardList';
import * as S from './ProjectCardLists.styled';

export default function ProjectCardLists() {
  const { searchFilters } = useSaveSearchFiltering();
  const { projectListsData, isError, isLoading } =
    useProjectCardListData(searchFilters);
  if (!projectListsData) return;

  return (
    <S.Container>
      <div className='title'>
        <h1>프로젝트 리스트</h1>
      </div>
      <S.Wrapper>
        {projectListsData.map((list) => (
          <CardList key={list.id} list={list} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
