import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 5.5rem;
`;

export const Item = styled.div`
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.navy};
  }

  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.primary};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

export const ReportItem = styled(Item)`
  border-top-left-radius: ${({ theme }) => theme.borderRadius.primary};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.primary};
`;
