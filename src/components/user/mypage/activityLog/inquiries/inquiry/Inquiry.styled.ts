import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const InquiryTitleWrapper = styled.button`
  width: 100%;
  text-align: start;
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: 8% 15% 65% 17%;
  cursor: pointer;
`;

export const InquiryNumber = styled.div`
  text-align: center;
`;

export const InquiryCategory = styled.div``;

export const InquiryTitle = styled.div``;

export const InquiryState = styled.div`
  text-align: center;
`;

export const InquiryStateSpan = styled.span<{ $isCompletedAnswer: boolean }>`
  width: fit-content;
  color: ${({ $isCompletedAnswer, theme }) =>
    $isCompletedAnswer ? theme.color.white : theme.color.green};

  ${({ $isCompletedAnswer }) =>
    $isCompletedAnswer &&
    css`
      background: ${({ theme }) => theme.color.navy};
      border-radius: ${({ theme }) => theme.borderRadius.small};
      padding: 0.2rem;
    `}
`;

export const InquiryContentWrapper = styled.div`
  margin: 0.5rem 0;
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
`;

export const InquiryContent = styled.div``;

export const InquiryImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InquiryImgWrapper = styled.div`
  margin-top: 1rem;
  cursor: pointer;
  width: fit-content;
  display: flex;
`;

export const ImgWrapper = styled.div``;

export const InquiryImg = styled.img`
  width: 5rem;
`;

export const MessageWrapper = styled.div`
  font-size: 0.8rem;
`;

export const InquiryAnswerContentContainer = styled.div`
  margin-top: 1rem;
`;

export const InquiryAnswerContentWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
`;

export const InquiryAnswerIconWrapper = styled.div`
  align-items: start;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const InquiryAnswerContent = styled.div`
  font-weight: 400;
  font-size: 1.1rem;
  white-space: pre-line;
`;

export const ModalImgContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  overflow: auto;
`;

export const ModalImgWrapper = styled.div`
  margin-top: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.navy};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const ModalImgMessageWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.8rem;
  background: ${({ theme }) => theme.color.navy};
  padding: 0.2rem;
`;

export const ModalImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
`;
