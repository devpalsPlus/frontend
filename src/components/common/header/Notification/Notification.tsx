import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';

const Notification = () => {
  const dummyNotifications = [
    {
      message: '1111111111',
      time: '8분 전',
      type: 'command',
    },
    {
      message: '2222222222',
      time: '13분 전',
      type: 'pass/nonPass',
    },
    {
      message: '33333333333',
      time: '14분 전',
      type: 'inquiry',
    },
  ];

  return (
    <S.Container>
      {dummyNotifications.map((item, index) => (
        <NotificationItem
          key={index}
          message={item.message}
          time={item.time}
          type={item.type}
        />
      ))}
    </S.Container>
  );
};

export default Notification;
