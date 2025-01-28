import { ApplicantInfo } from '../../../models/applicant';
import PassNonPassItem from './PassNonPassItem';
import * as S from './PassNonPassList.styled';

interface PassNonPassListProps {
  passNonPassListData: ApplicantInfo[];
}

function PassNonPassList({ passNonPassListData }: PassNonPassListProps) {
  return (
    <S.Wrapper>
      {passNonPassListData.map((data) => (
        <PassNonPassItem key={data.userId} userInfo={data} />
      ))}
    </S.Wrapper>
  );
}

export default PassNonPassList;
