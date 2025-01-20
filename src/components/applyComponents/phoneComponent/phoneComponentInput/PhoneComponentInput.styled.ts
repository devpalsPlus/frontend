import styled from 'styled-components';

export const PhoneInput = styled.input`
  width: 70px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-align: center;
  font-size: 19px;

  &:focus {
    outline: none;
    border-color: #888;
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
