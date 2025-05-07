import * as S from './ScrollWrapper.styled';

interface ScrollWrapperProps {
  children: React.ReactNode;
  $height?: string;
  scrollRef?: React.RefObject<HTMLDivElement> | null;
}

export default function ScrollWrapper({
  children,
  $height = '0%',
  scrollRef = null,
}: ScrollWrapperProps) {
  return (
    <S.ScrollWrapper $height={$height} ref={scrollRef}>
      {children}
    </S.ScrollWrapper>
  );
}
