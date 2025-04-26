import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import useAuthStore, { getTokens } from '../store/authStore';
import { useQueryClient } from '@tanstack/react-query';
import { AlarmList } from './queries/keys';

const useNotification = () => {
  const [isSignal, setIsSignal] = useState<string>('');
  const queryClient = useQueryClient();
  const userId = useAuthStore((state) => state.userData?.id);

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
          Authorization:
            getTokens().accessToken || getTokens().refreshToken
              ? `Bearer ${getTokens().accessToken}`
              : '',
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

        if (event.data) {
          queryClient.invalidateQueries({
            queryKey: [AlarmList.myAlarmList, userId],
          });
        }

        setIsSignal(event.data);

        setTimeout(() => {
          setIsSignal('');
        }, 4000);
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
  }, [queryClient, userId]);

  return { isSignal, setIsSignal };
};

export default useNotification;
