import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps {
  $isSelected: boolean;
  $passStatus: 'REJECTED' | 'ACCEPTED' | string;
}

export const getBorderColor = ($passStatus: string, theme: DefaultTheme) => {
  switch ($passStatus) {
    case 'REJECTED':
      return theme.color.red;
    case 'ACCEPTED':
      return theme.color.green;
    default:
      return theme.color.border;
  }
};

export const Button = styled.button<ButtonProps>`
  text-align: center;
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 500;
  flex-shrink: 0;
  width: 10rem;
  height: 2.5rem;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.buttonScheme.primary.bg : theme.color.white};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.buttonScheme.primary.color : theme.color.primary};
  border: 1px solid
    ${({ $passStatus, theme }) => getBorderColor($passStatus, theme)};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  &:hover {
    background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
    color: ${({ theme }) => theme.buttonScheme.primary.color};
    border: none;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 6.5rem;
    height: 1.9rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;
