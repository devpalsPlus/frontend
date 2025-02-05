import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 270px;
  height: 100%;
  padding: 1.5rem;
  padding-bottom: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SkillSetWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.heading.large.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1.25rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.medium.tabletFontSize};
  }
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.semiSmall.tabletFontSize};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1rem;

  .period {
    color: ${({ theme }) => theme.color.deepGrey};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
  }
`;

export const PeriodSpan = styled.span`
  color: ${({ theme }) => theme.color.deepGrey};
`;
