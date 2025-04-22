import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { getTokens } from '../store/authStore';

const useNotification = () => {
  const [isSignal, setIsSignal] = useState<boolean>(false);

  const EventSource = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_APP_API_BASE_URL}user/sse?Authorization=${
        getTokens().accessToken
      }`,
      {
        // headers: {
        //   authorization:
        //     getTokens().accessToken || getTokens().refreshToken
        //       ? `Bearer ${getTokens().accessToken}`
        //       : '',
        //   'Content-Type': 'application/json',
        // },
        heartbeatTimeout: 12 * 60 * 1000,
        withCredentials: true,
      }
    );
    eventSource.onmessage = (e) => {
      console.log(e);
      setIsSignal(!isSignal);
    };
    eventSource.onerror = (e) => {
      console.log(e);
    };
  }, [isSignal]);

  return { isSignal };
};

export default useNotification;
