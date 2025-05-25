import { useEffect, useState } from 'react';
import * as S from './Toast.styled';
import type { AlarmLive } from '../../../models/alarm';
import { Link } from 'react-router-dom';
import { routeSelector } from '../../../util/routeSelector';
import { timeAgo } from '../../../util/timeAgo';

interface ToastItemProps {
  id: string;
  content: AlarmLive;
  duration: number;
  onRemove: () => void;
}

const ToastItem = ({ content, duration, onRemove }: ToastItemProps) => {
  const [exiting, setExiting] = useState(false);
  const route = routeSelector(content.routingId, content.alarmFilterId);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = () => {
    if (exiting) onRemove();
  };

  return (
    <Link to={route}>
      <S.Item $exiting={exiting} onAnimationEnd={handleAnimationEnd}>
        <S.LiveMessage>{content.message}</S.LiveMessage>
        <S.TypeArea>
          <S.LiveDate>{timeAgo(content.createAt)} | </S.LiveDate>
          <S.TypeFilter>
            {content.alarmFilterId === 1
              ? '문의 답변'
              : content.alarmFilterId === 2
              ? '지원자 확인'
              : content.alarmFilterId === 3
              ? '댓글 답변'
              : '기타'}
          </S.TypeFilter>
        </S.TypeArea>
      </S.Item>
    </Link>
  );
};

export default ToastItem;
