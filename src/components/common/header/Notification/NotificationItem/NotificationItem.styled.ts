import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 0;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Message = styled.p`
  margin-left: 6px;
`;

export const Time = styled.span`
  margin-left: 6px;
  color: #999;
  font-size: 12px;
`;
