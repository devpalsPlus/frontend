import { ApplicantInfo } from '../../../models/applicant';
import * as S from './PassNonPassItem.styled';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface PassNonPassItemProps {
  userInfo: ApplicantInfo;
}

function PassNonPassItem({ userInfo }: PassNonPassItemProps) {
  return (
    <S.ItemWrapper>
      <S.NickName>{userInfo.User.nickname}</S.NickName>
      <S.DeleteButton>
        <XCircleIcon />
      </S.DeleteButton>
    </S.ItemWrapper>
  );
}

export default PassNonPassItem;
