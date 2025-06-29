import { ReactNode, useState } from 'react';
import type { AlarmLive } from '../../../models/alarm';
import { SseContext } from '../../../context/SseContext';

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [signalData, setSignalData] = useState<AlarmLive | null>(null);

  const clearSignal = () => setSignalData(null);
  const setSignal = (data: AlarmLive | null) => setSignalData(data);

  return (
    <SseContext.Provider value={{ signalData, clearSignal, setSignal }}>
      {children}
    </SseContext.Provider>
  );
};
