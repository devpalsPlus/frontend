import { useEffect, useState } from 'react';
import { useProjectCardListData } from '../../../../hooks/user/useProjectCardListData';
import CardList from './cardList/CardList';
import * as S from './ProjectCardLists.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/user/routes';
import EmptyLoading from '../../../common/emptyLoading/EmptyLoading';
import NoResult from '../../../common/noResult/NoResult';
import { useSaveSearchFiltering } from '../../../../hooks/user/useSaveSearchFiltering';
import Pagination from '../../../common/pagination/Pagination';

export type Display = 'flex' | 'grid';

export default function ProjectCardLists() {
  const { projectListsData, isLoading } = useProjectCardListData();
  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const [display, setDisplay] = useState<Display>('grid');

  const handleChangePagination = (page: number) => {
    handleUpdateFilters('page', page);
  };

  useEffect(() => {
    if (projectListsData && Boolean(projectListsData.projects.length)) {
      setDisplay('grid');
      return;
    }
    setDisplay('flex');
    console.log(searchFilters);
    console.log(projectListsData);
  }, [projectListsData, searchFilters]);

  if (isLoading)
    return (
      <EmptyLoading height='115.2rem' $tHeight='142rem' $mHeight='275rem' />
    );

  return (
    <S.Container>
      <S.CardListTitleWrapper>
        <S.CardListTitle>프로젝트 리스트</S.CardListTitle>
      </S.CardListTitleWrapper>
      <S.Wrapper $flex={display}>
        {projectListsData && Boolean(projectListsData.projects.length) ? (
          projectListsData.projects.map((list) => (
            <Link
              to={`${ROUTES.projectDetail}/${list.id}`}
              key={`projectCardLists-${list.id}`}
            >
              <CardList list={list} data-cardId={list.id} />
            </Link>
          ))
        ) : (
          <NoResult height='40rem' />
        )}
      </S.Wrapper>
      <Pagination
        page={searchFilters.page}
        getLastPage={Number(projectListsData?.lastPage)}
        onChangePagination={handleChangePagination}
      />
    </S.Container>
  );
}
