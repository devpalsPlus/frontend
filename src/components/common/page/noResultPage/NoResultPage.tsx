import { FaceFrownIcon } from '@heroicons/react/24/outline';
import * as S from './NoResultPage.styled';

export default function NoResultPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <span className='noResultTitle'>검색 결과가 없습니다.</span>
        <FaceFrownIcon />
      </S.Wrapper>
    </S.Container>
  );
}
