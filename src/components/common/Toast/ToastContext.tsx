import { createContext } from 'react';

export interface ToastMessage {
  id: string;
  content: string;
  duration: number;
}

export interface ToastContextProps {
  addToast: (content: string, duration?: number) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  addToast: () => {},
  removeToast: () => {},
});
