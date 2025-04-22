import { getSendAlarm } from '../../../../api/alarm.api';
import useAlarmList from '../../../../hooks/useAlarmList';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';

const Notification = () => {
  const { data: AlarmData, isLoading, isFetching } = useAlarmList();

  if (!AlarmData) {
    return '알림이 없습니다.';
  }

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <S.Container>
      {AlarmData.map((item, index) => (
        <NotificationItem key={index} item={item} />
      ))}
    </S.Container>
  );
};

export default Notification;
