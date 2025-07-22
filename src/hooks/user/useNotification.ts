import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AlarmList } from '../queries/keys';
import type { AlarmLive } from '../../models/alarm';
import useAuthStore from '../../store/authStore';
import { useToast } from '../useToast';
import { useNotificationContext } from '../../context/SseContext';

const useNotification = () => {
  const queryClient = useQueryClient();
  const accessToken = useAuthStore.getState().accessToken;
  const userId = useAuthStore.getState().userData?.id;
  const { showToast } = useToast();
  const { setSignal } = useNotificationContext();

  const eventSourceRef = useRef<EventSource | null>(null);

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
    } else {
      // 헤더가 아닌 파라미터 형태로 바꾸면서 Polyfill 제외 하기 -> CORS Preflight를 유발하여 요청 지연의 원인이 될 수 있음.
      const eventSource = new EventSource(
        `${import.meta.env.VITE_APP_API_BASE_URL}user/sse?accessToken=${
          accessToken ? accessToken : ''
        }`
      );

      eventSourceRef.current = eventSource;

      eventSource.onopen = () => {};

      eventSource.addEventListener('alarm', (e) => {
        const event = e as MessageEvent;
        try {
          const eventData: AlarmLive = JSON.parse(event.data);

          if (eventData) {
            queryClient.invalidateQueries({
              queryKey: [AlarmList.myAlarmList, userId],
            });
          }

          setSignal(eventData);
          showToast(eventData, 3000);
        } catch (error) {
          console.error('SSE 메시지 파싱 실패:', error);
        }
      });
      eventSource.onerror = (e) => {
        console.error('SSE 연결 오류:', e);
      };
    }

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [queryClient, userId, accessToken]);
};

export default useNotification;
