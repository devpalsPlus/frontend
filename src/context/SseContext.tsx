import { createContext, useContext } from 'react';
import { AlarmLive } from '../models/alarm';

export interface SseContextProps {
  signalData: AlarmLive | null;
  clearSignal: () => void;
  setSignal: (data: AlarmLive | null) => void;
}

export const SseContext = createContext<SseContextProps>({
  signalData: null,
  clearSignal: () => {},
  setSignal: () => {},
});

export const useNotificationContext = () => useContext(SseContext);
