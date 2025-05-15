import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-width: 22.7rem;
`;

export const Wrapper = styled.div`
  padding: 0 120px;
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0 20px;
  }
`;
