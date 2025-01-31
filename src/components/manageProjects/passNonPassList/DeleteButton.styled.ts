import styled from 'styled-components';

export const DeleteButton = styled.button`
  svg {
    color: #e69191;
    width: 1.2rem;
    height: 1.2rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`;
