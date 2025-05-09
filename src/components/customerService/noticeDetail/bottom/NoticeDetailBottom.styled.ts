import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav``;

export const NotOtherNotice = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ListLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.navy};
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.navy};
    border: 1px solid ${({ theme }) => theme.color.navy};
    transition: all 0.3s ease-in-out;
  }
`;

export const ListTitle = styled.span``;

export const ContentBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${({ theme }) => theme.color.placeholder};
  position: relative;
  z-index: 1;
`;
