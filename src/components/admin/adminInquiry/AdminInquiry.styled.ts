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

export const AdminInquiryUserWrapper = styled.div`
  position: relative;
`;

export const AdminInquiryUser = styled.button`
  width: fit-content;
  font-size: 1.1rem;
  z-index: 1;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.lightnavy};
  }
`;

export const AdminInquiryUserCheckDropdown = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0;
  background: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  padding: 0.3rem 0.5rem;
  z-index: 100000;
  box-shadow: 3px 2px 19px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 2px 19px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 2px 19px -6px rgba(0, 0, 0, 0.75);
`;

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
