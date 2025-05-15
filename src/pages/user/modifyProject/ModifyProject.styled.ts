import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
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
  font-size: ${({ theme }) => theme.heading.medium};
  color: #ccc;
`;

export const SectionTitle = styled.label`
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 12px;
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

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.navy};
  padding: 0.5rem 1.5rem;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.navy};
    border: 1px solid ${({ theme }) => theme.color.navy};
    transition: all 0.3s ease-in-out;
  }
`;
