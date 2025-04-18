import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';

const Notification = () => {
  const dummyNotifications = [
    {
      type: 'command' as const,
      id: 40,
      nickName: '운영자',
      message: '1111111111',
      time: '2025.04.12 15:30',
    },
    {
      type: 'pass/nonPass' as const,
      id: 1,
      message: '프로젝트 AI',
      pass: true,
      time: '2025.04.12 15:30',
    },
    {
      type: 'inquiry' as const,
      id: 1,
      message: '이거 이렇게 하는 거 맞나요?',
      time: '2025.04.12 15:30',
    },
  ];

  return (
    <S.Container>
      {dummyNotifications.map((item, index) => (
        <NotificationItem key={index} NotificationData={item} />
      ))}
    </S.Container>
  );
};

export default Notification;
