import * as S from './NotificationItem.styled';

interface NotificationItemProps {
  message: string;
  time: string;
  type: string;
}

const NotificationItem = ({ message, time, type }: NotificationItemProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
      <S.Time>{time}</S.Time>
    </S.Container>
  );
};

export default NotificationItem;
