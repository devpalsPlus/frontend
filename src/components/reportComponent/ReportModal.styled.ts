import styled from 'styled-components';

export const Overlay = styled.div`
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
  background: #fff;
  border-radius: 12px;
  padding: 2.5rem 2rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Avatar = styled.div`
  margin-right: 0.75rem;
`;

export const UserName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
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

export const CheckItem = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
  input {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;

export const DescriptionLabel = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  font-size: 0.9rem;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const Button = styled.button<{ variant?: 'default' | 'primary' }>`
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  ${(p) =>
    p.variant === 'primary'
      ? `
    background-color: #375076;
    color: #fff;
  `
      : `
    background-color: #e0e0e0;
    color: #666;
  `}
`;
