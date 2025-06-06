import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GAP_HEIGHT } from '../../../../constants/admin/adminGap';

export const AdminSearchBarContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

export const AdminSearchBarWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const AdminSearchBarInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.deepGrey};
  border-radius: ${({ theme }) => theme.borderRadius.large} 0 0
    ${({ theme }) => theme.borderRadius.large};
`;

export const AdminSearchBarInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
`;

export const AdminSearchBarBackIcon = styled.button`
  svg {
    width: 1.5rem;
  }
`;

export const AdminSearchBarButton = styled.button`
  width: 15%;
  min-width: 5rem;
  border: 1px solid ${({ theme }) => theme.color.navy};
  background: ${({ theme }) => theme.color.navy};
  border-radius: 0 ${({ theme }) => theme.borderRadius.large}
    ${({ theme }) => theme.borderRadius.large} 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 1rem 0.5rem 0.5rem;
`;

export const WriteLink = styled(Link)`
  border: 1px solid ${({ theme }) => theme.color.navy};
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 1rem;
  color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 1rem;
  transition: all 300ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.navy};
  }
`;

export const SearchBarFixedWrapperStyled = styled.div`
  max-width: calc(1440px - 19rem);
  width: calc(100vw - 19rem);
  position: fixed;
  top: 0;
  padding-top: ${GAP_HEIGHT.headerTitleTop};
  background: ${({ theme }) => theme.color.white};
  z-index: 10;
`;
