import styled from 'styled-components';
import { TitleProps } from './Title';

export const Container = styled.h1<Omit<TitleProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme }) => theme.color.primary};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme, size }) => theme.heading[size].tabletFontSize};
  }
`;
