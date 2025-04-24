import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { getTokens } from '../store/authStore';
import { httpClient } from '../api/http.api';

const useNotification = () => {
  const [isSignal, setIsSignal] = useState<boolean>(false);

  const EventSource = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    const eventSource = new EventSource(
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
    eventSource.addEventListener('alarm', (e) => {
      try {
        console.log(JSON.parse(e.data));
      } catch (error) {
        console.error(error);
      }
    });
    eventSource.onerror = (e) => {
      console.log(e);
    };
  }, []);

  //테스트용 API. 추후 삭제할 예정
  const getSendAlarm = async (id: number) => {
    try {
      const response = await httpClient.get(
        `/user/send-alarm?alarmFilter=${id}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { isSignal, getSendAlarm };
};

export default useNotification;
