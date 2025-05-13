import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: -20px;
  padding: 3px 0;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-bottom: 20px;
`;

export const CategoryItem = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ theme }) => theme.color.lightgrey};
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.navy};
    `}

  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }
`;

export const NameSpan = styled.button<{ $isSelected: boolean }>`
  font-size: 1rem;
  color: ${({ theme, $isSelected }) => $isSelected && theme.color.white};
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.red};
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
