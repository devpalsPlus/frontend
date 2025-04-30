import { Link } from 'react-router-dom';
import { Alarm } from '../../../../../models/alarm';
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
        <S.Time>{timeAgo(item.createdAt)}</S.Time>
      </S.Container>
    </Link>
  );
};

export default NotificationItem;
