import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 115.2rem; */
  h1 {
    padding: 4rem 0 2rem 0;
  }
`;

export const Wrapper = styled.div<{ $flex: boolean }>`
  width: 100%;
  display: ${({ $flex }) => ($flex ? 'flex' : 'grid')};
  grid-template-columns: ${({ $flex }) => ($flex ? '' : 'repeat(3, 1fr)')};
  place-items: ${({ $flex }) => ($flex ? '' : 'center')};
  gap: 3rem;
`;
