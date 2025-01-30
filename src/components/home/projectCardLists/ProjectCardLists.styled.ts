import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div<{ $flex: boolean }>`
  width: 100%;
  display: ${({ $flex }) => ($flex ? 'flex' : 'grid')};
  grid-template-columns: ${({ $flex }) => ($flex ? '' : 'repeat(3, 1fr)')};
  place-items: ${({ $flex }) => ($flex ? '' : 'center')};
  gap: 3rem;
`;

export const CardListTitleWrapper = styled.div``;

export const CardListTitle = styled.h1`
  padding: 4rem 0 2rem 0;
`;
