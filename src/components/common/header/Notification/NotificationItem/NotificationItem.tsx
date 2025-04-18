import {
  COMMAND,
  INQUIRY,
  PASSNONPASS,
} from '../../../../../constants/commandConstants';
import * as S from './NotificationItem.styled';

interface NotificationItemProps {
  NotificationData: {
    type: 'command' | 'pass/nonPass' | 'inquiry';
    id: number;
    time: string;
    message: string;
    nickName?: string;
    pass?: boolean;
  };
}

const NotificationItem = ({ NotificationData }: NotificationItemProps) => {
  return (
    <S.Container>
      <S.Message>
        {NotificationData.type === 'command'
          ? `'${NotificationData.nickName}' ${COMMAND}${NotificationData.message}`
          : NotificationData.type === 'pass/nonPass'
          ? `'${NotificationData.message}' ${PASSNONPASS} ${
              NotificationData.pass ? '합격' : '불합격'
            }`
          : `'${NotificationData.message}' ${INQUIRY}`}
      </S.Message>
      <S.Time>{NotificationData.time}</S.Time>
    </S.Container>
  );
};

export default NotificationItem;
