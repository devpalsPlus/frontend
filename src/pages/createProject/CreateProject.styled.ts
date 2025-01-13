import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 60px;
`;

export const Inputs = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
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
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: #fff;
  flex-direction: column;
  gap: 15px;
`;

export const InfoRow = styled.div`
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;
  display: flex;

  label {
    font-size: 0.8rem;
    font-weight: bold;
    color: #333;
    flex: 0.11;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  width: 10%;
  padding: 15px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
