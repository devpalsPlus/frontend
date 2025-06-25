import styled from 'styled-components';
import { SendButton } from '../../user/customerService/inquiry/Inquiry.styled';

export const CRUDContainer = styled.form`
  width: 100%;
  height: 100%;
`;

export const CRUDWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  /* align-items: center; */
`;

export const CRUDButtonWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

export const CRUDButton = styled(SendButton)`
  height: 2.3rem;
`;

export const CRUDTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CRUDTitleHead = styled.span``;

export const CRUDTitle = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.color.placeholder};
  padding-left: 0.3rem;
  font-size: 1rem;
`;

export const CRUDDefaultButton = styled.button`
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const CRUDImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CRUDImgHead = styled.span``;

export const CRUDImg = styled.img`
  width: 3rem;
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export const CRUDImgExplore = styled(SendButton)`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 0.4rem 1rem;
`;

export const CRUDImgExplain = styled.span`
  max-width: 10rem;
`;

export const CRUDImgInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;
