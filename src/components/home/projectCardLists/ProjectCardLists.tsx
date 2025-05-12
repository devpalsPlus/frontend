import { useEffect, useState } from 'react';
import { useProjectCardListData } from '../../../hooks/useProjectCardListData';
import CardList from './cardList/CardList';
import Pagination from './pagination/Pagination';
import * as S from './ProjectCardLists.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import EmptyLoading from '../../common/emptyLoading/EmptyLoading';
import NoResult from '../../common/noResult/NoResult';

export default function ProjectCardLists() {
  const { projectListsData, isLoading } = useProjectCardListData();
  const [isFlex, setIsFlex] = useState(false);

  useEffect(() => {
    if (projectListsData && Boolean(projectListsData.projects.length)) {
      setIsFlex(false);
      return;
    }
    setIsFlex(true);
  }, [projectListsData]);

  if (isLoading)
    return (
      <EmptyLoading height='115.2rem' $tHeight='142rem' $mHeight='275rem' />
    );

  return (
    <S.Container>
      <S.CardListTitleWrapper>
        <S.CardListTitle>프로젝트 리스트</S.CardListTitle>
      </S.CardListTitleWrapper>
      <S.Wrapper $flex={isFlex}>
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
      <Pagination />
    </S.Container>
  );
}
