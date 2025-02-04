import styled from 'styled-components';

export const PhoneInput = styled.input`
  width: 70px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-align: center;
  font-size: ${({ theme }) => theme.heading.semiSmall.fontSize};

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading.small.fontSize};
  }
`;
