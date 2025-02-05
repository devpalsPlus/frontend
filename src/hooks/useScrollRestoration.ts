import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  // const [storageArr, setStorageArr] = useState<
  //   { storageKey: string; scrollTo: string }[]
  // >([]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // 메인 페이지의 키 정의
    const storageKey = location.pathname;

    // 저장된 스크롤 위치 복원
    const savedPosition = localStorage.getItem(storageKey);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    // 스크롤 이벤트 핸들러 추가
    const handleScroll = () => {
      if (location.pathname === '/') {
        localStorage.setItem(storageKey, window.scrollY.toString());
        localStorage.setItem('아니', 'true');
      } else {
        localStorage.setItem('아니', 'false');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
};

export default useScrollRestoration;
