import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AlarmList } from '../queries/user/keys';
import type { AlarmLive } from '../../models/alarm';
import useAuthStore, { getTokens } from '../../store/authStore';
import { useToast } from '../useToast';

const useNotification = () => {
  const [signalData, setSignalData] = useState<AlarmLive | null>(null);
  const queryClient = useQueryClient();
  const userId = useAuthStore((state) => state.userData?.id);
  const { showToast } = useToast();

  const eventSourceRef = useRef<EventSource | null>(null);
  const EventSourceImpl = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    if (!userId) {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
      return;
    }

    if (eventSourceRef.current) {
      return;
    }

    // 헤더가 아닌 파라미터 형태로 바꾸면서 Polyfill 제외 하기 -> CORS Preflight를 유발하여 요청 지연의 원인이 될 수 있음.
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
      console.error(e);
    };
  }, [queryClient, userId]);

  useEffect(() => {
    if (signalData) {
      showToast(signalData, 3000);
    }
  }, [signalData, showToast]);
  return { signalData, setSignalData };
};

export default useNotification;
