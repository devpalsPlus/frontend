import styled, { css } from 'styled-components';

const basicStyle = css`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

const dateStyle = css`
  flex: 0.5;
  padding: 10px 9px;
  background-color: #ffffff;
  color: #aaa;
  font-family: 'Arial', sans-serif;

  &::placeholder {
    color: #aaa;
  }
`;

export const CareerInput = styled.input`
${basicStyle}
  padding: 10px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #888;
  }

  &:nth-child(1) {
    flex: 1;
      font-size: ${({ theme }) => theme.heading.small.fontSize};
  }

  &:nth-child(2) {
    ${basicStyle}
    ${dateStyle}
  }

  &:nth-child(3) {
    ${basicStyle}
    ${dateStyle}

  &:nth-child(4) {
    flex: 2;
      font-size: ${({ theme }) => theme.heading.small.fontSize};
  }
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
