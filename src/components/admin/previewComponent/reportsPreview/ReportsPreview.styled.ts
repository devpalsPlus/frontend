import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ReportArea = styled(Link)`
  display: flex;
`;

export const ContentArea = styled.div`
  margin-left: 16px;
`;

export const ReportedCount = styled.div`
  font-size: 9px;
  opacity: 0.5;
`;

export const Category = styled.p`
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StateArea = styled.div`
  display: flex;
`;

export const ReportDate = styled.p`
  font-size: 9px;
  opacity: 0.5;
`;

export const Divider = styled.p`
  font-size: 9px;
  opacity: 0.2;
  margin-left: 3px;
  margin-right: 3px;
`;

export const IsDone = styled.p<{ $isDone: boolean }>`
  font-size: 9px;
  color: ${({ theme, $isDone }) =>
    $isDone ? theme.color.green : theme.color.red};
`;

export const MoveToReportsArea = styled(Link)`
  display: flex;
`;

export const Text = styled.p`
  font-size: 9px;
`;

export const Arrow = styled.img`
  width: 11px;
  height: 11px;
`;
