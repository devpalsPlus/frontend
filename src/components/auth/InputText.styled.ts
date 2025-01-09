import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.72rem 0.625rem;
  border-radius: 30px;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #c2c2c2;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9em;
  color: ${({ theme }) => theme.color.primary}

  &::placeholder {
    color: #c2c2c2;
  }
`;
