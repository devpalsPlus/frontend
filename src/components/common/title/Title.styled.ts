import styled from 'styled-components';
import { TitleProps } from './Title';

export const Container = styled.h1<Omit<TitleProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme }) => theme.color.primary};
`;
