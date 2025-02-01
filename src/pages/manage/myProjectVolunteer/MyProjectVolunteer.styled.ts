import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  height: 40rem;
  padding-bottom: 3rem;
  overflow-y: hidden;
`;

export const ApplicantListWrapper = styled.div`
  margin-right: 1.25rem;
`;

export const ApplicantInfoWrapper = styled.div`
  width: 100%;
`;

export const TitleWithButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.semiSmall.tabletFontSize};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
