import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
`;

export const DateTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 2rem;
  font-size: ${({ theme }) => theme.heading.small};
  color: ${({ theme }) => theme.color.navy};
  padding: 0.5rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-right: 1.25rem;
`;

export const Period = styled.small`
  font-size: ${({ theme }) => theme.heading.small};
  font-weight: 500;
  color: ${({ theme }) => theme.color.deepgrey};
`;
