import styled from 'styled-components';

export const TitleContainer = styled.header`
  width: calc(100vw - 20rem);
  position: fixed;
  top: 0;
  padding: 2.5rem 0 0 0;
  background: ${({ theme }) => theme.color.white};
  z-index: 100;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1``;
