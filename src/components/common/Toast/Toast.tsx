import { createPortal } from 'react-dom';
import * as S from './Toast.styled';
import { PropsWithChildren } from 'react';

export interface ToastProps {
  duration?: number;
  handleToastOpen: () => void;
  handleToastClose: () => void;
}

const Toast = ({ children }: PropsWithChildren<ToastProps>) => {
  return createPortal(<S.Container>{children}</S.Container>, document.body);
};

export default Toast;
