import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.medium};
  font-weight: bold;
  margin-bottom: 50px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DateInput = styled.input`
  flex: 0.1;
  padding: 10px 9px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.heading.small};
  background-color: #ffffff;
  color: #aaa;
  font-family: 'Arial', sans-serif;

  &::placeholder {
    color: #aaa;
  }
`;

export const Separator = styled.span`
  font-size: ${({ theme }) => theme.heading.small};
  color: #ccc;
`;

export const SectionTitle = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionInput = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
  flex-direction: column;
  gap: 15px;
`;

export const InfoRow = styled.div`
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  display: flex;

  label {
    font-size: 0.8rem;
    font-weight: bold;
    color: #333;
    flex: 0.08;
  }
`;

export const InputContainer = styled.div`
  flex: 0.92;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;

export const InfoInputText = styled.input`
  width: 180px;
  border: none;
  font-size: 0.8rem;
  text-align: left;
`;

export const InfoInputCheckbox = styled.input`
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export const InfoInputSelect = styled.input`
  select {
    flex: 0.6;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 0.5rem;
    background-color: #f9f9f9;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.heading.small};
  resize: none;
`;

export const SubmitButton = styled.button`
  width: 10%;
  padding: 15px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
