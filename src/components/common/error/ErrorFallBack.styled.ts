import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorMessage = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.red};
`;

export const ErrorDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-bottom: 32px;
`;

export const Button = styled.button`
  margin-top: 16px;
`;
