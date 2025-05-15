import styled from 'styled-components';

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 15px;
  position: relative;
`;

export const Dash = styled.span`
  align-self: center;
  font-size: ${({ theme }) => theme.heading.semiLarge.fontSize};
  color: #888;
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 115%;
  left: 5px;
  white-space: nowrap;
`;
