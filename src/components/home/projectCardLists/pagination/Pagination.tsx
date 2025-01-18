import React, { useEffect, useState } from 'react';
import { useProjectCardListData } from '../../../../hooks/useProjectCardListData';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import * as S from './Pagination.styled';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
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
    endPage: 1,
  };
  const [pagination, setPagination] = useState<number[]>(
    Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  );

  useEffect(() => {
    setPagination(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => i + 1)
    );
  }, [endPage, startPage]);

  const handleMovePaginationClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const dataId = target.dataset.id;
    if (!dataId) return;
    handleUpdateFilters('page', Number(dataId));
  };

  const handleChevronClick = (page: number) => {
    handleUpdateFilters('page', page);
  };

  if (!lastPage) return;
  return (
    <S.Container>
      <S.Wrapper>
        <div className='paginationWrapper' onClick={handleMovePaginationClick}>
          {currentPage !== 1 && (
            <>
              <button onClick={() => handleChevronClick(currentPage - 1)}>
                <ChevronLeftIcon />
              </button>
              <button
                className='doubleButton'
                onClick={() => handleChevronClick(1)}
              >
                1
              </button>
              <EllipsisHorizontalIcon />
            </>
          )}

          {Array.from({ length: endPage - startPage + 1 }, (_, i: number) => {
            const pageIndex = startPage + i;
            return (
              <S.Pagination
                key={pageIndex}
                data-id={pageIndex}
                $select={currentPage === pageIndex ? true : false}
              >
                {pageIndex}
              </S.Pagination>
            );
          })}
          {currentPage !== lastPage && (
            <>
              <EllipsisHorizontalIcon />
              <button
                className='doubleButton'
                onClick={() => handleChevronClick(lastPage)}
              >
                {lastPage}
              </button>
              <button onClick={() => handleChevronClick(currentPage + 1)}>
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
