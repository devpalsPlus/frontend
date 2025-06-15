// src/components/admin/userDetail/AdminUserDetail.styled.ts
import styled from 'styled-components';
import { SpinnerContainer } from '../../user/mypage/Spinner.styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  flex: 1;
  padding-top: 7rem;
`;

export const Spinner = styled(SpinnerContainer)``;

export const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0 10px;
  }
`;

export const UserNameArea = styled.div``;

export const UserName = styled.h3``;

export const ContentHeader = styled.div`
  margin-left: 25px;
  padding: 24px 0 0 24px;
`;

export const BackToList = styled(Link)``;

export const MainContent = styled.div`
  height: 80%;
  flex: 1;
  background: ${({ theme }) => theme.color.lightgrey};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 24px;
`;

export const DetailContent = styled.div`
  flex: 1 1 0;
  height: 80vh;
  overflow-y: auto;
  border: 2px solid #f0f0f0;
  border-radius: 30px;
  padding: 2rem;
`;
