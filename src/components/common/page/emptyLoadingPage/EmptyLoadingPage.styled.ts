import styled from 'styled-components';
import { EmptyLoadingPageProps } from './EmptyLoadingPage';

export const Container = styled.div<EmptyLoadingPageProps>`
  width: 100%;
  height: ${({ height }) => height};

  @media screen ${({ theme }) => theme.mediaQuery.tablet} {
    height: ${({ tHeight }) => tHeight};
  }

  @media screen ${({ theme }) => theme.mediaQuery.mobile} {
    height: ${({ mHeight }) => mHeight};
  }
`;
