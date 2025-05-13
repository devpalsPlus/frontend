import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const CardListTitleWrapper = styled.div``;

export const CardListTitle = styled.h1`
  padding: 6rem 0 2rem 0;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 4rem 0 2rem 0;
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 2rem 0 2rem 0;
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div<{ $flex: 'flex' | 'grid' }>`
  width: 100%;

  ${({ $flex }) => {
    switch ($flex) {
      case 'flex':
        return css`
          display: flex;
        `;
      case 'grid':
        return css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
          place-items: center;
        `;
      default:
        break;
    }
  }}
  gap: 3rem;

  a {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: ${({ $flex }) =>
      $flex ? '' : 'repeat(auto-fit, minmax(40%, 1fr))'};
    gap: 2rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 100%;
    grid-template-columns: ${({ $flex }) =>
      $flex ? '' : 'repeat(auto-fit, minmax(50%, 1fr))'};
    gap: 1rem;
  }
`;
