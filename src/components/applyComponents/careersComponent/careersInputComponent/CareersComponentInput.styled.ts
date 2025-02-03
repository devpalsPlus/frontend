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
  font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};

  &:nth-child(1),
  &:nth-child(4) {
    flex: 2;
    font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};
  }

  &:nth-child(2),
  &:nth-child(3) {
    ${dateStyle}
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
    margin-bottom: 12px;
    font-size: ${({ theme }) => theme.heading.small.fontSize};
  }
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;
