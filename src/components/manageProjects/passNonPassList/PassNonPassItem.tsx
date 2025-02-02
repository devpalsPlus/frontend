import { useMutationParams } from '../../../hooks/usePassNonPassMutation';
import { ApplicantInfo } from '../../../models/applicant';
import { ProjectDetailExtended } from '../../../models/projectDetail';
import DeleteButton from './DeleteButton';
import * as S from './PassNonPassItem.styled';

interface PassNonPassItemProps {
  userInfo: ApplicantInfo;
  projectData: ProjectDetailExtended;
  hanldeStatus: ({ status, userId }: useMutationParams) => void;
  handleUserInfo: (userId: number) => void;
}

function PassNonPassItem({
  userInfo,
  hanldeStatus,
  projectData,
  handleUserInfo,
}: PassNonPassItemProps) {
  return (
    <S.ItemWrapper>
      <S.NickName onClick={() => handleUserInfo(userInfo.userId)}>
        {userInfo.User.nickname}
      </S.NickName>
      <DeleteButton
        disabled={projectData.isDone}
        onClick={() =>
          hanldeStatus({ status: 'WAITING', userId: userInfo.userId })
        }
      />
    </S.ItemWrapper>
  );
}

export default PassNonPassItem;
