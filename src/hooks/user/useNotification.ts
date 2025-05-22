import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AlarmList } from '../queries/user/keys';
import { AlarmLive } from '../../models/alarm';
import useAuthStore from '../../store/authStore';
import { useToast } from '../useToast';

const useNotification = () => {
  const [signalData, setSignalData] = useState<AlarmLive | null>(null);
  const queryClient = useQueryClient();
  const accessToken = useAuthStore.getState().accessToken;
  const userId = useAuthStore.getState().userData?.id;
  const { showToast } = useToast();

  const eventSourceRef = useRef<EventSource | null>(null);
  const EventSourceImpl = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    if (!userId) {
      return;
    }

    const eventSource = new EventSourceImpl(
      `${import.meta.env.VITE_APP_API_BASE_URL}user/sse`,
      {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
          'Content-Type': 'application/json',
        },
        heartbeatTimeout: 12 * 60 * 1000,
      }
    );

    eventSourceRef.current = eventSource;

    eventSource.addEventListener('alarm', (e) => {
      const event = e as MessageEvent;
      try {
        console.log(JSON.parse(event.data));
        const eventData: AlarmLive = JSON.parse(event.data);

        if (eventData) {
          queryClient.invalidateQueries({
            queryKey: [AlarmList.myAlarmList, userId],
          });
        }

        setSignalData(eventData);
      } catch (error) {
        console.error(error);
      }
    });
    eventSource.onerror = (e) => {
      console.log(e);
    };

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [queryClient, userId, accessToken, EventSourceImpl]);

  useEffect(() => {
    if (signalData) {
      showToast(signalData, 3000);
    }
  }, [signalData, showToast]);
  return { signalData, setSignalData };
};

export default useNotification;
