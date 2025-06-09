import styled from 'styled-components';
import {
  AdminInquiryContentContainer,
  AdminInquiryContentWrapper,
  InquiryContent,
  InquiryHeaderWrapper,
  InquiryInfo,
} from './AdminInquiryDetailContent.styled';
import { SendButton } from '../../user/customerService/inquiry/Inquiry.styled';

export const InquiryAnswerContentContainer = styled(
  AdminInquiryContentContainer
)`
  margin-bottom: 5rem;
`;

export const InquiryAnswerContentWrapper = styled(AdminInquiryContentWrapper)``;

export const AnswerHeaderWrapper = styled(InquiryHeaderWrapper)`
  display: flex;
  gap: 3rem;
`;

export const InquiryAnswerInfo = styled(InquiryInfo)`
  display: flex;
  align-items: center;
`;

export const InquiryAnswerButton = styled(SendButton)`
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
`;

export const AnswerButtonSpan = styled.span``;

export const InquiryAnswerContent = styled(InquiryContent)``;
