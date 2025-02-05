import { FaceFrownIcon } from '@heroicons/react/24/outline';
import * as S from './NoResultPage.styled';

export interface NoResultPageProps {
  height: string;
}

export default function NoResultPage({ height }: NoResultPageProps) {
  return (
    <S.Container height={height}>
      <S.Wrapper>
        <S.Title>검색 결과가 없습니다.</S.Title>
        <FaceFrownIcon />
      </S.Wrapper>
    </S.Container>
  );
}
