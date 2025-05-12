import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

export const ListTitle = styled.div`
  font-size: 1.2rem;
  padding-left: 1.5rem;
  font-weight: bold;
`;

export const ListPlusIcon = styled.div<{ $isOpen: boolean }>`
  margin-right: 1.5rem;
  transition: transform 500ms ease-in-out;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(45deg);
    `}
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ListContentWrapper = styled.div`
  cursor: auto;
  background: ${({ theme }) => theme.color.lightgrey};
  padding: 1.5rem 1rem;
  display: flex;
  gap: 0.5rem;
`;

export const ListButtonWrapper = styled.div`
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ListContent = styled.div`
  font-size: 1.1rem;
  padding-right: 1.5rem;
`;
