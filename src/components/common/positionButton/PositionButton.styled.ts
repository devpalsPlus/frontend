import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const PositionButton = styled.button<{
  $isSelected: boolean;
  $isHover: boolean;
  $fontSize: boolean;
}>`
  background-color: ${({ theme }) => theme.color.lightgrey};
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 0.3rem 0.4rem;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.navy};
    `}

  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: 1rem;
    `}

  cursor: pointer;
  transition: all 0.2s;

  ${({ $isHover }) =>
    $isHover &&
    css`
      &:hover {
        transform: scale(1.1);
        transition: all 100ms ease-in-out;
      }
    `}
`;
