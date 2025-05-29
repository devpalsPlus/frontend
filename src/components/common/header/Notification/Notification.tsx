import React from 'react';
import * as S from './Notification.styled';
import NotificationItem from './NotificationItem/NotificationItem';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import useAlarmList from '../../../../hooks/user/useAlarmList';
import arrow_right from '../../../../assets/ArrowRight.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';

const Notification = () => {
  const navigate = useNavigate();
  const { alarmListData: AlarmData, isLoading, isFetching } = useAlarmList();

  if (!AlarmData) {
    return (
      <S.Container>
        <S.NonContentsMessage>알림이 없습니다.</S.NonContentsMessage>
      </S.Container>
    );
  }

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.NotificationHeader>
        <S.MoreArea
          onClick={() =>
            navigate(`${ROUTES.mypage}/${ROUTES.myPageNotifications}`)
          }
        >
          <S.More>더보기</S.More>
          <S.Arrow src={arrow_right} />
        </S.MoreArea>
      </S.NotificationHeader>
      <S.Line />
      <S.ScrollArea>
        {AlarmData.map((item, index) => (
          <React.Fragment key={index || item.id}>
            <NotificationItem item={item} />
            {index !== AlarmData.length - 1 && <S.Line />}
          </React.Fragment>
        ))}
      </S.ScrollArea>
    </S.Container>
  );
};

export default Notification;
