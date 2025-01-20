import React, { useEffect, useState } from 'react';
import { useProjectCardListData } from '../../../../hooks/useProjectCardListData';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import * as S from './Pagination.styled';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function Pagination() {
  const { projectListsData } = useProjectCardListData();
  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const lastPage = projectListsData?.lastPage;
  const currentPage = searchFilters.page;

  const calculatePageRange = () => {
    if (!lastPage) return;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(lastPage, startPage + 4);
    const adjustedStartPage = Math.max(1, endPage - 4);
    return { startPage: adjustedStartPage, endPage };
  };
  const { startPage, endPage } = calculatePageRange() || {
    startPage: 1,
    endPage: 5,
  };

  const [pagination, setPagination] = useState<number[]>([]);
  useEffect(() => {
    setPagination(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    );
  }, [endPage, startPage]);

  if (!lastPage) return;

  const handleMovePaginationClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const dataId = target.dataset.id;
    if (!dataId) return;
    handleUpdateFilters('page', Number(dataId));
  };

  type Action = 'pagePrev' | 'pageFirst' | 'pageEnd' | 'pageNext';
  const handleChevronClick = (action: Action) => {
    switch (action) {
      case 'pagePrev':
        handleUpdateFilters('page', currentPage - 1);
        break;
      case 'pageFirst':
        handleUpdateFilters('page', 1);
        break;
      case 'pageEnd':
        handleUpdateFilters('page', lastPage);
        break;
      case 'pageNext':
        handleUpdateFilters('page', currentPage + 1);
        break;
      default:
        break;
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <div className='paginationWrapper' onClick={handleMovePaginationClick}>
          {currentPage !== 1 && (
            <>
              <button onClick={() => handleUpdateFilters('page', lastPage)}>
                <ChevronLeftIcon />
              </button>
              <button
                className='doubleButton'
                onClick={() => handleChevronClick('pageFirst')}
              >
                1
              </button>
              <EllipsisHorizontalIcon />
            </>
          )}

          {pagination.map((pageIndex) => (
            <S.Pagination
              key={pageIndex}
              data-id={pageIndex}
              $select={currentPage === pageIndex ? true : false}
            >
              {pageIndex}
            </S.Pagination>
          ))}
          {currentPage !== lastPage && (
            <>
              <EllipsisHorizontalIcon />
              <button
                className='doubleButton'
                onClick={() => handleChevronClick('pageEnd')}
              >
                {lastPage}
              </button>
              <button onClick={() => handleChevronClick('pageNext')}>
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
