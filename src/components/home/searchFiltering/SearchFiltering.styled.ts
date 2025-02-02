import styled from 'styled-components';

export const Container = styled.nav``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    gap: 1rem;
  }
`;
