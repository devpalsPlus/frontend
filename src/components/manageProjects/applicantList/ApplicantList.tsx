import * as S from './ApplicantList.styled';
import { ApplicantInfo } from '../../../models/applicant';
import ApplicantItem from './ApplicantItem';
interface ApplicantListProps {
  applicantsData: ApplicantInfo[];
  onClick: (userId: number) => void;
}

function ApplicantList({ applicantsData, onClick }: ApplicantListProps) {
  return (
    <S.Container>
      {applicantsData.map((data) => (
        <ApplicantItem
          onClick={onClick}
          key={data.userId}
          applicantData={data}
        />
      ))}
    </S.Container>
  );
}

export default ApplicantList;
