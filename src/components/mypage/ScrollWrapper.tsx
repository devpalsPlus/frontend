import React, { useEffect } from 'react';
import * as S from './ScrollWrapper.styled';

interface ScrollWrapperProps {
  children: React.ReactNode;
  $height: string;
  scrollRef: React.RefObject<HTMLDivElement> | null;
}

export default function ScrollWrapper({
  children,
  $height,
  scrollRef = null,
}: ScrollWrapperProps) {
  useEffect(() => {
    console.log(scrollRef);
  }, [scrollRef]);

  return (
    <S.ScrollWrapper $height={$height} ref={scrollRef}>
      {children}
    </S.ScrollWrapper>
  );
}
