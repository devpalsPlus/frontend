import { createContext } from 'react';
import type { AlarmLive } from '../models/alarm';

export interface ToastMessage {
  id: string;
  content: AlarmLive;
  duration: number;
}

export interface ToastContextProps {
  addToast: (content: AlarmLive, duration?: number) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  addToast: () => {},
  removeToast: () => {},
});
