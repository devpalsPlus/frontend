import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownButtonWrapper = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Panel = styled.div<{ $comment: boolean }>`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  ${({ $comment }) =>
    $comment &&
    css`
      position: absolute;
      top: 0px;
      right: 30px;
    `}
`;
