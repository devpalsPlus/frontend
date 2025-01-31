import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.medium.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-left: 1rem;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.medium.tabletFontSize};
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  overflow-y: hidden;
  padding-bottom: 3rem;
  justify-content: space-between;
  margin-top: 3.5rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    min-width: 468px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
`;
