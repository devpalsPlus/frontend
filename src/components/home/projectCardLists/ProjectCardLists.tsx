import { useEffect, useState } from 'react';
import { useProjectCardListData } from '../../../hooks/useProjectCardListData';
import EmptyLoadingPage from '../../common/page/emptyLoadingPage/EmptyLoadingPage';
import NoResultPage from '../../common/page/noResultPage/NoResultPage';
import CardList from './cardList/CardList';
import Pagination from './pagination/Pagination';
import * as S from './ProjectCardLists.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

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

  if (isLoading) return <EmptyLoadingPage height='115.2rem' />;

  return (
    <S.Container>
      <div className='title'>
        <h1>프로젝트 리스트</h1>
      </div>
      <S.Wrapper $flex={isFlex}>
        {projectListsData && Boolean(projectListsData.projects.length) ? (
          projectListsData.projects.map((list) => (
            <Link to={`${ROUTES.projectDetail}/${list.id}`} key={list.id}>
              <CardList list={list} data-cardId={list.id} />
            </Link>
          ))
        ) : (
          <NoResultPage height='40rem' />
        )}
      </S.Wrapper>
      <Pagination />
    </S.Container>
  );
}
