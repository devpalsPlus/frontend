import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovedListContainer = styled.nav``;

export const MovedListLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.color.deepGrey};
  }
`;

export const MovedListIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
  }
`;

export const MovedList = styled.div`
  font-size: 1.2rem;
`;

export const MovedListTitleWrapper = styled.div``;

export const MovedListTitle = styled.h3`
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.deepGrey};
`;
