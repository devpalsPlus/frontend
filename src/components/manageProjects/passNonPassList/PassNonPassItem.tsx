import { useMutationParams } from '../../../hooks/usePassNonPassMutation';
import { ApplicantInfo } from '../../../models/applicant';
import DeleteButton from './DeleteButton';
import * as S from './PassNonPassItem.styled';

interface PassNonPassItemProps {
  userInfo: ApplicantInfo;
  onClick: ({ status, userId }: useMutationParams) => void;
}

function PassNonPassItem({ userInfo, onClick }: PassNonPassItemProps) {
  return (
    <S.ItemWrapper>
      <S.NickName>{userInfo.User.nickname}</S.NickName>
      <DeleteButton
        onClick={() => onClick({ status: 'WAITING', userId: userInfo.userId })}
      />
    </S.ItemWrapper>
  );
}

export default PassNonPassItem;
