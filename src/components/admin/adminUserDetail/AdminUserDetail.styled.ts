// src/components/admin/userDetail/AdminUserDetail.styled.ts
import styled from 'styled-components';
import { SpinnerContainer } from '../../user/mypage/Spinner.styled';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

export const Container = styled.div`
  width: 100%;
  height: 800px;
  margin: 6rem auto 0;
  display: flex;
  flex-direction: column;
`;

export const Spinner = styled(SpinnerContainer)``;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContentHeader = styled(Button)``;

export const BackToList = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0 10px;
  }
`;

export const UserNameArea = styled.div``;

export const UserName = styled.h3``;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.lightgrey};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 24px;
`;

export const DetailContent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    position: relative;
    left: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  border: 2px solid #f0f0f0;
  border-radius: 30px;
  padding: 2rem;
`;
