import styled from 'styled-components';

export const TableRow = styled.tr`
  border-bottom: 1px solid #e9ecef;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.lightgrey};
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.deepGrey};
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const DateDisplay = styled.span`
  font-size: 14px;
  color: #495057;
`;

export const Placeholder = styled.span`
  font-size: 14px;
  color: #6c757d;
`;
