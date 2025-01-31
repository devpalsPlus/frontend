import styled from 'styled-components';

export const Label = styled.p`
  font-size: ${({ theme }) => theme.heading.medium.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.semiSmall.tabletFontSize};
  }
`;

export const Content = styled.span`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1rem;

  .period {
    color: ${({ theme }) => theme.color.deepGrey};
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;
