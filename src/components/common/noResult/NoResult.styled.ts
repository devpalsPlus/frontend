import styled from 'styled-components';
import { NoResultPageProps } from './NoResult';

export const Container = styled.div<Pick<NoResultPageProps, 'height'>>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    height: ${({ height }) => `calc(${height}*0.5)`};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.5rem;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
