import React from 'react';
import { Alarm } from '../../../../models/alarm';
import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';

interface NotificationProps {
  alarmData: Alarm[] | undefined;
}

const Notification = ({ alarmData }: NotificationProps) => {
  if (!alarmData) {
    return (
      <S.Container>
        <S.Message>알림이 없습니다.</S.Message>;
      </S.Container>
    );
  }

  return (
    <S.Container>
      {alarmData.map((item, index) => (
        <React.Fragment key={index}>
          <NotificationItem item={item} />
          {index !== alarmData.length - 1 && <S.Line />}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default Notification;
