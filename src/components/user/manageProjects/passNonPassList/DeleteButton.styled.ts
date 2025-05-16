import styled from 'styled-components';

export const DeleteButton = styled.button`
  svg {
    color: #e69191;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.1);
    svg {
      color: ${({ theme }) => theme.color.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`;
