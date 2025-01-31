import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 20px;
`;

export const Dates = styled.p`
  font-size: 20px;
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
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const SubmitButton = styled(Button)`
  width: 100px;
  padding: 15px;
  margin: 0 auto;
  cursor: pointer;
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
