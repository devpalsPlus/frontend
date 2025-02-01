import styled from 'styled-components';

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 15px;
  position: relative;
`;

export const PhoneInput = styled.input<{ name: string }>`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-align: center;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const Dash = styled.span`
  align-self: center;
  font-size: 25px;
  color: #888;
`;

export const FormError = styled.p`
  margin-top: 0.3px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.red};
  position: absolute;
  top: 115%;
  left: 5px;
  white-space: nowrap;
`;
