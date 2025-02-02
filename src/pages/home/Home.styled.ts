import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
`;

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0 20px;
  }
`;
