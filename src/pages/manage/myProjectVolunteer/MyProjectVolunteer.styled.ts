import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

export const ApplicantListWrapper = styled.div`
  margin-right: 1.25rem;
`;

export const ApplicantInfoWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-bottom: 1rem;
`;
