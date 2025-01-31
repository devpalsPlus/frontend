import * as S from './NoMyInfo.styled';
import { IdentificationIcon } from '@heroicons/react/24/outline';

const NoMyInfo = () => {
  return (
    <S.Container>
      <IdentificationIcon />
      <span>유저 정보를 불러올 수 없습니다.</span>
    </S.Container>
  );
};

export default NoMyInfo;
