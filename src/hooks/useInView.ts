import { RefObject, useEffect, useState } from 'react';
interface UseScrollProps {
  refs: RefObject<HTMLDivElement>[];
  options?: ObserverOptions;
}

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInView = ({ refs, options }: UseScrollProps) => {
  const [isVisibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = refs.findIndex((ref) => ref.current === entry.target);
        if (entry.isIntersecting) {
          setVisibleIndex(index);
        }
      });
    }, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, options?.threshold]);

  return { isVisibleIndex };
};
