import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 8px 0;
  font-size: 14px;
`;

export const TypeArea = styled.div`
  display: flex;
  margin-left: 6px;
`;

export const Type = styled.p``;

export const TypeFilter = styled.p`
  font-size: 12px;
  opacity: 50%;
  margin-right: 6px;
`;

export const ItemContent = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
`;

export const Time = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: 6px;
  margin-right: 5px;
`;

export const Dot = styled.span<{ $isRead: boolean }>`
  width: 5px;
  height: 5px;
  background-color: #ff3b30;
  border-radius: 50%;
  margin-top: 6px;

  ${({ $isRead }) =>
    $isRead &&
    css`
      background-color: #00db42;
    `}
`;
