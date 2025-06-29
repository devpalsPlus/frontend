import styled from 'styled-components';
import { ScrollArea } from '../../common/header/Notification/Notification.styled';
import { SpinnerContainer } from '../../user/mypage/Spinner.styled';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 0 auto;
`;

export const Spinner = styled(SpinnerContainer)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NickName = styled.p`
  font-size: 0.8rem;
  opacity: 40%;
`;

export const Category = styled.p``;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin-bottom: 30px;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    width: 45%;
    height: 45%;
    top: 59%;
    right: -10rem;
    border: 1.5px solid ${({ theme }) => theme.color.primary};
    border-right: 0;
    border-bottom: 0;
    transform: rotate(130deg);
    }

    &::after {
      width: 24.3rem;
      height: 1px;
      top: 78%;
      left: -11rem;
      background-color: ${({ theme }) => theme.color.primary};
      transform-origin: 0 100%;
      transform: rotate(0deg);

    }
  }
`;

export const Date = styled.p`
  opacity: 60%;
`;

export const ContentContainer = styled.div`
  width: 80%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-top: 30px;
  padding: 40px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.hr`
  width: 400px;
  height: 1px;
  margin: 20px 0 20px 0;
  opacity: 40%;
`;

export const Scroll = styled(ScrollArea)`
  padding: 20px;
`;

export const Content = styled.p`
  white-space: pre-wrap;
`;

export const ConfirmContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ConfirmArea = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

export const ConfirmButton = styled(Button)``;
