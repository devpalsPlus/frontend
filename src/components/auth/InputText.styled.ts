import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9em;
  color: ${({theme}) => theme.color.primary}

  &::placeholder {
    color: #aaa;
  }
`;