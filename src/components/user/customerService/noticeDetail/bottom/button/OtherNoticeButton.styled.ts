import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OtherNoticeLink = styled(Link)`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
  }
`;

export const OtherNoticeWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const OtherNotice = styled.span`
  font-weight: 600;
`;

export const OtherNoticeTitle = styled.span``;

export const OtherNoticeDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.placeholder};
`;
