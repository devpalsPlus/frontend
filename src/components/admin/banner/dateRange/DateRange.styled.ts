import styled from 'styled-components';

export const DateRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DateSeparator = styled.span`
  color: #6c757d;
  font-size: 14px;
`;

export const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 14px;
  width: 140px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #adb5bd;
  }
`;
