import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 600px;
  max-width: 90%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  padding: 2.5rem 2rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.heading.semiLarge.fontSize};
`;

export const Avatar = styled.div`
  margin-right: 0.75rem;
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: 600;
`;

export const Content = styled.p`
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentContainer = styled.div``;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  opacity: 40%;
  margin-bottom: 0.75rem;
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const CheckRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const CheckItem = styled.div``;

export const CheckInput = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const CheckContent = styled.label`
  font-size: 0.9rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  resize: vertical;
  font-size: 0.9rem;
  &::placeholder {
    color: #aaa;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const ErrorMessage = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.color.red};
`;
