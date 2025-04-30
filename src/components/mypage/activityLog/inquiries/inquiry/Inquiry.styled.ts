import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-size: 1.1rem;
`;

export const InquiryTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 8% 18% 62% 12%;
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

export const InquiryContentWrapper = styled.div`
  margin: 0.5rem 0;
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
`;

export const InquiryContent = styled.div``;

export const InquiryImgWrapper = styled.div`
  margin-top: 1rem;
  cursor: pointer;
`;

export const InquiryModalImgWrapper = styled.div`
  display: flex;
`;

export const InquiryImg = styled.img`
  width: 5rem;
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

export const ModalImgButtonWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.8rem;
  background: ${({ theme }) => theme.color.navy};
  padding: 0.2rem;
`;

export const ModalImg = styled.img``;
