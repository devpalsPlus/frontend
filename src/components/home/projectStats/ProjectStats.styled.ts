import styled from 'styled-components';

export const Container = styled.section`
  padding: 8rem 0;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 3rem 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
    padding: 0 4rem;
    gap: 1rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0;
  }
`;
