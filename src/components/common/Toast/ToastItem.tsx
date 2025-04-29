import { useEffect, useState } from 'react';
import * as S from './Toast.styled';

interface ToastItemProps {
  id: string;
  content: string;
  duration: number;
  onDone: () => void;
}

const ToastItem = ({ content, duration, onDone }: ToastItemProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = () => {
    if (exiting) onDone();
  };

  return (
    <S.Item $exiting={exiting} onAnimationEnd={handleAnimationEnd}>
      {content}
    </S.Item>
  );
};

export default ToastItem;
