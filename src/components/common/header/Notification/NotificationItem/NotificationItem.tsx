import { Link } from 'react-router-dom';
import type { Alarm } from '../../../../../models/alarm';
import * as S from './NotificationItem.styled';
import { routeSelector } from '../../../../../util/routeSelector';
import { useContext } from 'react';
import { DropDownContext } from '../../../../../context/DropDownContext';
import { timeAgo } from '../../../../../util/timeAgo';

interface NotificationItemProps {
  item: Alarm;
}

const NotificationItem = ({ item }: NotificationItemProps) => {
  const { close } = useContext(DropDownContext);
  const route = routeSelector(item.routingId, item.alarmFilterId);
  return (
    <Link to={route} onClick={close}>
      <S.Container>
        <S.ItemContent>{item.content}</S.ItemContent>
        <S.TypeArea>
          <S.Time>{timeAgo(item.createdAt)}</S.Time>
          <S.TypeFilter>
            {item.alarmFilterId === 1
              ? '문의 답변'
              : item.alarmFilterId === 2
              ? '지원자 확인'
              : item.alarmFilterId === 3
              ? '댓글 답변'
              : '기타'}
          </S.TypeFilter>
          <S.Dot $isRead={item.enabled} />
        </S.TypeArea>
      </S.Container>
    </Link>
  );
};

export default NotificationItem;
