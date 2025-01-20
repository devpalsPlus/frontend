import styled from 'styled-components';
import { NoResultPageProps } from './NoResultPage';

export const Container = styled.div<Pick<NoResultPageProps, 'height'>>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  .noResultTitle {
    font-size: 1.5rem;
  }

  svg {
    width: 1.5rem;
  }
`;
