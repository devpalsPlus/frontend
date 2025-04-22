import {
  COMMAND,
  INQUIRY,
  PASSNONPASS,
} from '../../../../../constants/commandConstants';
import { AlarmAll } from '../../../../../models/alarm';
import * as S from './NotificationItem.styled';

interface NotificationItemProps {
  item: AlarmAll;
}

const NotificationItem = ({ item }: NotificationItemProps) => {
  return (
    <S.Container>
      <S.Message>
        {/* {NotificationData.type === 'command'
          ? `'${NotificationData.nickName}' ${COMMAND}${NotificationData.message}`
          : NotificationData.type === 'pass/nonPass'
          ? `'${NotificationData.message}' ${PASSNONPASS} ${
              NotificationData.pass ? '합격' : '불합격'
            }`
          : `'${NotificationData.message}' ${INQUIRY}`} */}
      </S.Message>
      <S.Time></S.Time>
    </S.Container>
  );
};

export default NotificationItem;
