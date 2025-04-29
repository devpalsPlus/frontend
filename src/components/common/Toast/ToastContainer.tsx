import { createPortal } from 'react-dom';
import { ToastMessage } from './ToastContext';
import ToastItem from './ToastItem';
import * as S from './Toast.styled';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => {
  return createPortal(
    <S.Container>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
          onDone={() => onRemove(toast.id)}
        />
      ))}
    </S.Container>,
    document.body
  );
};

export default ToastContainer;
