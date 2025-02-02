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

  return (
    <S.Container>
      <S.Wrapper onClick={handleMovePaginationClick}>
        {currentPage !== 1 && (
          <>
            <S.PaginationButton
              onClick={() => handleUpdateFilters('page', currentPage - 1)}
            >
              <ChevronLeftIcon />
            </S.PaginationButton>
            <S.PaginationDoubleButton
              className='doubleButton'
              onClick={() => handleUpdateFilters('page', 1)}
            >
              1
            </S.PaginationDoubleButton>
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
            <S.PaginationDoubleButton
              className='doubleButton'
              onClick={() => handleUpdateFilters('page', lastPage)}
            >
              {lastPage}
            </S.PaginationDoubleButton>
            <S.PaginationButton
              onClick={() => handleUpdateFilters('page', currentPage + 1)}
            >
              <ChevronRightIcon />
            </S.PaginationButton>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
