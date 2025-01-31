import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const DateTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 2rem;
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  color: ${({ theme }) => theme.color.navy};
  padding: 0.5rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-right: 1.25rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 5rem;
    height: 1.5rem;
    padding: 0.25rem 1rem;
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;

export const Period = styled.small`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.color.deepgrey};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;
