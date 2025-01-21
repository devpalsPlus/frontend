import * as S from './ApplicantList.styled';
import { ApplicantInfo } from '../../../models/applicant';
import ApplicantItem from './ApplicantItem';
interface ApplicantListProps {
  selectedApplicant: number;
  applicantsData: ApplicantInfo[];
  onClick: (userId: number) => void;
}

function ApplicantList({
  selectedApplicant,
  applicantsData,
  onClick,
}: ApplicantListProps) {
  return (
    <S.Container>
      {applicantsData.map((data) => (
        <ApplicantItem
          selectedApplicant={selectedApplicant}
          onClick={onClick}
          key={data.userId}
          applicantData={data}
        />
      ))}
    </S.Container>
  );
}

export default ApplicantList;
