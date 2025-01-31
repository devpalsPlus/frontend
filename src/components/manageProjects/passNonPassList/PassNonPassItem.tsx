import { useMutationParams } from '../../../hooks/usePassNonPassMutation';
import { ApplicantInfo } from '../../../models/applicant';
import { ProjectDetailExtended } from '../../../models/projectDetail';
import DeleteButton from './DeleteButton';
import * as S from './PassNonPassItem.styled';

interface PassNonPassItemProps {
  userInfo: ApplicantInfo;
  projectData: ProjectDetailExtended;
  onClick: ({ status, userId }: useMutationParams) => void;
}

function PassNonPassItem({
  userInfo,
  onClick,
  projectData,
}: PassNonPassItemProps) {
  return (
    <S.ItemWrapper>
      <S.NickName>{userInfo.User.nickname}</S.NickName>
      <DeleteButton
        disabled={projectData.isDone}
        onClick={() => onClick({ status: 'WAITING', userId: userInfo.userId })}
      />
    </S.ItemWrapper>
  );
}

export default PassNonPassItem;
