import styled from 'styled-components';
import { SendButton } from '../../user/customerService/inquiry/Inquiry.styled';
import {
  ModalImg,
  ModalImgContainer,
  ModalImgMessageWrapper,
  ModalImgWrapper,
} from '../../user/mypage/activityLog/inquiries/inquiry/Inquiry.styled';

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

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const InquiryInfo = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const InquiryDeleteButton = styled(SendButton)`
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
`;

export const InquiryContent = styled.div`
  font-size: 1.1rem;
  width: 100%;
  white-space: pre-line;
  overflow: hidden;
`;

export const InquiryFileImgBlowUpButton = styled.button``;

export const InquiryFileImg = styled.img`
  width: 5rem;
`;

export const MessageWrapper = styled.div`
  font-size: 0.8rem;
`;

export const AdminInquiryModalImgContainer = styled(ModalImgContainer)`
  z-index: 1000000000;
`;

export const AdminInquiryModalImgWrapper = styled(ModalImgWrapper)``;

export const AdminInquiryModalImgMessageWrapper = styled(
  ModalImgMessageWrapper
)``;

export const AdminInquiryModalImg = styled(ModalImg)``;
