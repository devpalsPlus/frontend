import React from 'react';
import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';
import useAlarmList from '../../../../hooks/useAlarmList';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';

const Notification = () => {
  const { alarmListData: AlarmData, isLoading, isFetching } = useAlarmList();

  if (!AlarmData) {
    return (
      <S.Container>
        <S.Message>알림이 없습니다.</S.Message>;
      </S.Container>
    );
  }

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.ScrollArea>
        {AlarmData.map((item, index) => (
          <React.Fragment key={index}>
            <NotificationItem item={item} />
            {index !== AlarmData.length - 1 && <S.Line />}
          </React.Fragment>
        ))}
      </S.ScrollArea>
    </S.Container>
  );
};

export default Notification;
