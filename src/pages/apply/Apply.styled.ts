import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

export const Dates = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 10px;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const PhoneInputFirst = styled.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;
export const PhoneInput = styled.input`
  width: 80px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const Dash = styled.span`
  align-self: center;
  font-size: 16px;
  color: #888;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CareerContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

export const CareerInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #888;
  }

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(2) {
    flex: 0.5;
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
  }
  &:nth-child(3) {
    flex: 0.5;
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
  }

  &:nth-child(4) {
    flex: 2;
  }
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
