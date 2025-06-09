import styled from 'styled-components';
import {
  AdminInquiryContentContainer,
  AdminInquiryContentWrapper,
  InquiryContent,
} from './AdminInquiryDetailContent.styled';
import {
  AnswerHeaderWrapper,
  InquiryAnswerButton,
  InquiryAnswerInfo,
} from './AdminInquiryAnswer.styled';

export const InquiryAnswerContentContainer = styled(
  AdminInquiryContentContainer
)``;

export const InquiryAnswerWriteWrapper = styled(AdminInquiryContentWrapper)``;

export const InquiryAnswerWriteHeaderWrapper = styled(AnswerHeaderWrapper)`
  display: flex;
  gap: 3rem;
`;

export const InquiryAnswerWriteInfo = styled(InquiryAnswerInfo)`
  display: flex;
  align-items: center;
`;

export const InquiryAnswerWriteButton = styled(InquiryAnswerButton)`
  align-items: start;
  height: fit-content;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
`;

export const InquiryAnswerWriteButtonSpan = styled.span``;

export const InquiryAnswerWrite = styled(InquiryContent)`
  resize: none;
  border: 1px solid ${({ theme }) => theme.color.placeholder};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 1rem;
`;
