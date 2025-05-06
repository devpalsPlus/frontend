import styled, { css } from 'styled-components';

export const ListContainer = styled.div``;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.div`
  font-size: 1.3rem;
  padding-left: 1.5rem;
  font-weight: bold;
`;

export const ListPlusButton = styled.button<{ $isOpen: boolean }>`
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
  margin: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const ListButtonWrapper = styled.div`
  margin-top: 0.1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ListContent = styled.div`
  font-size: 1.1rem;
  padding-right: 1.5rem;
`;
