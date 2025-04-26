import React from 'react';
import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';
import useAlarmList from '../../../../hooks/useAlarmList';

const Notification = () => {
  const { alarmListData: AlarmData, isLoading, isFetching } = useAlarmList();

  if (!AlarmData) {
    return (
      <S.Container>
        <S.Message>알림이 없습니다.</S.Message>;
      </S.Container>
    );
  }

  return (
    <S.Container>
      {AlarmData.map((item, index) => (
        <React.Fragment key={index}>
          <NotificationItem item={item} />
          {index !== AlarmData.length - 1 && <S.Line />}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default Notification;
