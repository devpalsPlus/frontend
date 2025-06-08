import styled from 'styled-components';

export const AdminInquiryContentContainer = styled.section`
  width: 95%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const AdminInquiryContentWrapper = styled.div``;

export const InquiryHeaderWrapper = styled.header`
  margin-bottom: 0.5rem;
`;

export const InquiryTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InquiryInfo = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const InquiryContent = styled.div`
  font-size: 1.1rem;
  width: 100%;
`;
