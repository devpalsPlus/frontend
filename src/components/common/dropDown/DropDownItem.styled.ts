import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  width: 120px;
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  z-index: 999;
`;

export const Item = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  background-color: #f7f7f7;

  &:hover {
    background-color: #eaeaea;
  }

  & + & {
    border-top: 1px solid #ccc;
  }
`;
