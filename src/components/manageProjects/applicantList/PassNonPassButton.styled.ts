import styled from 'styled-components';
import { PassNonPassButtonProps } from './PassNonPassButton';

export const PassNonPassButton = styled.button<PassNonPassButtonProps>`
  padding: 0.5rem 0.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, isPass }) =>
    isPass ? theme.color.green : '#CF9898'};
  margin-right: 1rem;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.color.grey};
  }

`;
