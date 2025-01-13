import styled from 'styled-components';

export const Container = styled.div<{ isSelected: boolean }>`
  .positionButton {
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.buttonScheme.primary.bg : theme.color.white};
    width: fit-content;
    border: 1px solid
      ${({ isSelected, theme }) =>
        isSelected ? theme.buttonScheme.primary.bg : theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    padding: 0.2rem 0.4rem;
    color: ${({ isSelected, theme }) => isSelected && theme.color.white};

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      transition: all 100ms ease-in-out;
    }
  
`;
