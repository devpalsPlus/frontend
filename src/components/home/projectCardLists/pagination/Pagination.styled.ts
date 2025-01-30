import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    width: 1.5rem;
  }
`;

export const PaginationWrapper = styled.div``;

export const Pagination = styled.button<{ $select: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ $select, theme }) =>
    $select ? theme.color.navy : 'initial'};
  color: ${({ $select, theme }) => ($select ? theme.color.white : 'initial')};
`;

export const PaginationButton = styled.button``;

export const PaginationDoubleButton = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
`;
