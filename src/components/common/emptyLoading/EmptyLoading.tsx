import * as S from './EmptyLoading.styled';

export interface EmptyLoadingPageProps {
  height: string;
  $tHeight: string;
  $mHeight: string;
}

export default function EmptyLoading({
  height,
  $tHeight,
  $mHeight,
}: EmptyLoadingPageProps) {
  return (
    <S.Container
      height={height}
      $tHeight={$tHeight}
      $mHeight={$mHeight}
    ></S.Container>
  );
}
