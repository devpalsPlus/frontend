import styled from 'styled-components';

export const TableRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
  background-color: #f8f9fa;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const TableCell = styled.td`
  padding: 14px;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  color: #333;
`;

export const ImageCell = styled.td`
  position: relative;
  height: 120px;
  padding: 0;
  width: 280px;
  text-align: center;
  vertical-align: middle;
`;

export const CreateButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const Placeholder = styled.span`
  font-size: 14px;
  color: #6c757d;
`;
