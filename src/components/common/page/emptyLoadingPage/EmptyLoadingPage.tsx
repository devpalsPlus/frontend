import * as S from './EmptyLoadingPage.styled';

export interface EmptyLoadingPageProps {
  height: string;
}

export default function EmptyLoadingPage({ height }: EmptyLoadingPageProps) {
  return <S.Container height={height}></S.Container>;
}
