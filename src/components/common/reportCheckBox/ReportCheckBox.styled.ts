import styled from 'styled-components';

export const Container = styled.div`
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
  accent-color: red;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const CheckContent = styled.label`
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.color.red};
`;
