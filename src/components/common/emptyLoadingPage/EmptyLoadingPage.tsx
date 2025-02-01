import * as S from './EmptyLoadingPage.styled';

export interface EmptyLoadingPageProps {
  height: string;
  tHeight: string;
  mHeight: string;
}

export default function EmptyLoadingPage({
  height,
  tHeight,
  mHeight,
}: EmptyLoadingPageProps) {
  return (
    <S.Container
      height={height}
      tHeight={tHeight}
      mHeight={mHeight}
    ></S.Container>
  );
}
