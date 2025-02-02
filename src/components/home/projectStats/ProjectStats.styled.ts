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
  justify-content: space-evenly;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    gap: 1rem;
    padding: 0;
  }
`;
