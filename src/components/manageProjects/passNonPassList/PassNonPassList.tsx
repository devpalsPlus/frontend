import { useMutationParams } from '../../../hooks/usePassNonPassMutation';
import { ApplicantInfo } from '../../../models/applicant';
import PassNonPassItem from './PassNonPassItem';
import * as S from './PassNonPassList.styled';

interface PassNonPassListProps {
  passNonPassListData: ApplicantInfo[];
  onClick: ({ status, userId }: useMutationParams) => void;
}

function PassNonPassList({
  passNonPassListData,
  onClick,
}: PassNonPassListProps) {
  return (
    <S.Wrapper>
      {passNonPassListData.map((data) => (
        <PassNonPassItem key={data.userId} onClick={onClick} userInfo={data} />
      ))}
    </S.Wrapper>
  );
}

export default PassNonPassList;
