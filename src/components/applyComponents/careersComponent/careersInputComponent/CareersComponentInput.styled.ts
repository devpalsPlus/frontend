import styled, { css } from 'styled-components';

const basicStyle = css`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

const dateStyle = css`
  flex: 0.5;
  padding: 10px 9px;
`;

export const CareerInput = styled.input`
  ${basicStyle}
  padding: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #888;
  }

  &:nth-child(1) {
    flex: 2;
    font-size: ${({ theme }) => theme.heading.small.fontSize};
  }

  &:nth-child(2) {
    ${basicStyle}
    ${dateStyle}
  }

  &:nth-child(3) {
    ${basicStyle}
    ${dateStyle}
  }

  &:nth-child(4) {
    flex: 2;
    font-size: ${({ theme }) => theme.heading.small.fontSize};
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    flex: 1;
    margin-bottom: 10px;

    &:nth-child(1),
    &:nth-child(4) {
      width: 60%;
      flex: 1;
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 20%;
      flex: 1;
    }
  }
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
