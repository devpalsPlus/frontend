import styled from 'styled-components';

export const Container = styled.div``;

export const LanguagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  padding: 3px 0;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const LanguageItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px 8px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.buttonScheme.primary.bg : theme.color.white};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.lightgrey};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }

  .lang {
    font-size: 0.7rem;
    font-weight: 200;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.white : theme.color.primary};
  }
`;

export const FormError = styled.p`
  margin-top: 3px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.red};
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
