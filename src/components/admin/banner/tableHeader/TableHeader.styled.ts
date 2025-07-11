import styled from 'styled-components';

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
`;

export const TableRow = styled.tr<{ $header?: boolean }>`
  border-bottom: 1px solid #e9ecef;

  &:hover {
    background-color: ${({ $header }) => ($header ? 'transparent' : '#f8f9fa')};
  }
`;

export const TableHeaderCell = styled.th`
  padding: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  border-bottom: 2px solid #dee2e6;

  &:nth-child(1) {
    width: 50px;
  }
  &:nth-child(2) {
    width: 280px;
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 160px;
  }
  &:nth-child(5) {
    width: 240px;
  }
  &:nth-child(6) {
    width: 140px;
  }
`;
