import styled from 'styled-components';

export const Label = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
`;

export const Content = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 1rem;

  .period {
    color: ${({ theme }) => theme.color.deepGrey};
  }
`;
