import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const AdminInquiryContainer = styled(Link)``;

export const AdminInquiryWrapper = styled.div`
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 13% 51% 15% 11% 10%;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

export const AdminInquiryTitle = styled.div``;

export const AdminInquiryCategory = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AdminInquiryUser = styled.div``;

export const AdminInquiryDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.deepGrey};
`;

export const AdminInquiryState = styled.div<{ $hasAnswer: boolean }>`
  text-align: center;
  color: ${({ $hasAnswer, theme }) =>
    $hasAnswer ? theme.color.white : theme.color.green};
  padding: 0.3rem;

  ${({ $hasAnswer }) =>
    $hasAnswer &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius.large};
      background: ${({ theme }) => theme.color.navy};
    `}
`;
