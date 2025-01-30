import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 1rem 0 1rem 1.2rem;
`;

export const NoWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem 0 5rem;
`;

export const Container = styled.div`
  background-color: rgb(246 246 246);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem 3rem;
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 2rem;
  }
`;
