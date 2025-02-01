import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-left: 1.25rem;
  align-items: center;
  gap: 1rem;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    justify-content: start;
    padding-left: 2rem;
  }
`;

export const Border = styled.div`
  width: 0.3rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.navy};

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    height: 3rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    height: 2rem;
  }
`;

export const StatWrapper = styled.div``;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.5rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: 1rem;
  }
`;

export const StatTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1rem;
  }
  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: 0.8rem;
  }
`;
