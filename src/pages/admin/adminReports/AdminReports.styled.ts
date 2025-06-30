import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

export const List = styled.div`
  width: 90%;
  height: 600px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 45px;
  margin: 30px auto 0;
  overflow-y: auto;
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const ProfileImg = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const NickName = styled.p`
  ${({ theme }) => theme.heading.xsSmall};
  margin-top: 3px;
  opacity: 50%;
`;

export const ContentArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 35px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Category = styled.p`
  padding: 5px 10px;
  ${({ theme }) => theme.heading.small};
  opacity: 50%;
`;

export const Content = styled.p`
  ${({ theme }) => theme.heading.semiSmall};
  font-weight: 500;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const WarningButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};
`;

export const BanButton = styled(Button)``;

export const DeleteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-left: 10px;
`;
