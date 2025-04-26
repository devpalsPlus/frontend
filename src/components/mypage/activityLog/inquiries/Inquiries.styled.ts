import styled from 'styled-components';

export const container = styled.div`
  height: 100%;
`;

export const WrapperButton = styled.div`
  height: 5%;
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  width: 5rem;
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.color.white};
`;

export const WrapperNoContent = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
`;
