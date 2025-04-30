import { Link } from 'react-router-dom';
import { Alarm } from '../../../../../models/alarm';
import * as S from './NotificationItem.styled';
import { ROUTES } from '../../../../../constants/routes';

interface NotificationItemProps {
  item: Alarm;
}

const NotificationItem = ({ item }: NotificationItemProps) => {
  return (
    <Link to={`${ROUTES.notice}/${item.routingId}`}>
      <S.Container>
        <S.ItemContent>{item.content}</S.ItemContent>
        <S.Time>{item.createdAt}</S.Time>
      </S.Container>
    </Link>
  );
};

export default NotificationItem;
