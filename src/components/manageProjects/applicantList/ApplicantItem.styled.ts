import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps {
  $isSelected: boolean;
  passStatus: 'REJECTED' | 'SUCCESS' | string;
}

export const getBorderColor = (passStatus: string, theme: DefaultTheme) => {
  switch (passStatus) {
    case 'REJECTED':
      return theme.color.red;
    case 'SUCCESS':
      return theme.color.green;
    default:
      return theme.color.border;
  }
};

export const Button = styled.button<ButtonProps>`
  text-align: center;
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: 500;
  flex-shrink: 0;
  width: 10rem;
  height: 2.5rem;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.buttonScheme.primary.bg : theme.color.white};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.buttonScheme.primary.color : theme.color.primary};
  border: 1px solid
    ${({ passStatus, theme }) => getBorderColor(passStatus, theme)};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  &:hover {
    background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
    color: ${({ theme }) => theme.buttonScheme.primary.color};
    border: none;
  }
`;
