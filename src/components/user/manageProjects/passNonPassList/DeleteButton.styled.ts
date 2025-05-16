import styled from 'styled-components';

export const DeleteButton = styled.button`
  svg {
    color: #e69191;
    width: 1.2rem;
    height: 1.2rem;
    background: ${({ theme }) => theme.color.white};
    border-radius: 50%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`;
