import styled from 'styled-components';

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const RadioInput = styled.input`
  margin: 0;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  color: #495057;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #007bff;
  }
`;
