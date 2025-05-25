import { useNavigate } from 'react-router-dom';
import { useMutationParams } from '../../../../hooks/user/usePassNonPassMutation';
import type { ApplicantInfo } from '../../../../models/applicant';
import type { ProjectDetailPlusExtended } from '../../../../models/projectDetail';
import PassNonPassItem from './PassNonPassItem';
import * as S from './PassNonPassList.styled';

interface PassNonPassListProps {
  passNonPassListData: ApplicantInfo[];
  projectData: ProjectDetailPlusExtended;
  handleStatus: ({ status, userId }: useMutationParams) => void;
}

function PassNonPassList({
  passNonPassListData,
  projectData,
  handleStatus,
}: PassNonPassListProps) {
  const navigate = useNavigate();
  const handleUserInfo = (userId: number) => {
    navigate(`/manage/${projectData.id}?userId=${userId}`);
  };

  return (
    <S.Wrapper>
      {passNonPassListData.map((data) => (
        <PassNonPassItem
          key={data.userId}
          handleUserInfo={handleUserInfo}
          handleStatus={handleStatus}
          userInfo={data}
          projectData={projectData}
        />
      ))}
    </S.Wrapper>
  );
}

export default PassNonPassList;
