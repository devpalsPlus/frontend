import React, { useEffect, useState } from 'react';
import * as S from './NoticePagination.styled';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

interface NoticePaginationProps {
  page: number;
  getLastPage: number;
  onChangePagination: (page: number) => void;
}

export default function NoticePagination({
  page,
  getLastPage,
  onChangePagination,
}: NoticePaginationProps) {
  const lastPage = getLastPage;
  const currentPage = page;

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
    onChangePagination(Number(dataId));
  };
  return (
    <S.Container>
      <S.Wrapper onClick={handleMovePaginationClick}>
        {currentPage !== 1 && (
          <>
            <S.PaginationButton
              onClick={() => onChangePagination(currentPage - 1)}
            >
              <ChevronLeftIcon />
            </S.PaginationButton>
            <S.PaginationDoubleButton onClick={() => onChangePagination(1)}>
              1
            </S.PaginationDoubleButton>
            <EllipsisHorizontalIcon />
          </>
        )}

        {pagination.map((pageIndex) => (
          <S.Pagination
            key={`pagination-${pageIndex}`}
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
              onClick={() => onChangePagination(lastPage)}
            >
              {lastPage}
            </S.PaginationDoubleButton>
            <S.PaginationButton
              onClick={() => onChangePagination(currentPage + 1)}
            >
              <ChevronRightIcon />
            </S.PaginationButton>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
