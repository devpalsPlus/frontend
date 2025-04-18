import * as S from './NoMyInfo.styled';
import { IdentificationIcon } from '@heroicons/react/24/outline';

const NoMyInfo = () => {
  return (
    <S.Container>
      <IdentificationIcon />
      <S.Span>유저 정보를 불러올 수 없습니다.</S.Span>
    </S.Container>
  );
};

export default NoMyInfo;
