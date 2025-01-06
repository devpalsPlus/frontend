import styled from 'styled-components';

export const Container = styled.div``;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
  padding: 3px 0;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 3px;
`;

export const CategoryItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px 5px;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary : theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary : theme.color.white};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.primary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
  }

  .name {
    font-size: 0.7rem;
    font-weight: 200;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.red};
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
