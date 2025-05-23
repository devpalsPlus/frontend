import { useMutationParams } from '../../../../hooks/user/usePassNonPassMutation';
import type { ApplicantInfo } from '../../../../models/applicant';
import type { ProjectDetailPlusExtended } from '../../../../models/projectDetail';
import DeleteButton from './DeleteButton';
import * as S from './PassNonPassItem.styled';

interface PassNonPassItemProps {
  userInfo: ApplicantInfo;
  projectData: ProjectDetailPlusExtended;
  handleStatus: ({ status, userId }: useMutationParams) => void;
  handleUserInfo: (userId: number) => void;
}

function PassNonPassItem({
  userInfo,
  handleStatus,
  projectData,
  handleUserInfo,
}: PassNonPassItemProps) {
  return (
    <S.ItemWrapper
      onClick={() => handleUserInfo(userInfo.userId)}
      aria-label='지원자 이력보기'
    >
      <S.NickName>{userInfo.user.nickname}</S.NickName>
      <DeleteButton
        disabled={projectData.isDone}
        onClick={() =>
          handleStatus({ status: 'WAITING', userId: userInfo.userId })
        }
      />
    </S.ItemWrapper>
  );
}

export default PassNonPassItem;
